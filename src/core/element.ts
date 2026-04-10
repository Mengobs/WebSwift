//元素定义：元素名字，元素的模板，元素样式，元素方法，元素实现
type Prop = string | number | boolean | null
type CommonThis<P> = HTMLElement & P
/**
 * Prop需预先定义类型，否则返回时会出错。
 */
interface Config<M, P extends {
    [name: string]: Prop
},> {
    name: string;
    template?: string;
    style?: string;
    props?: P;
    syncProps?: (keyof P)[]
    dispatch?: {
        propChanged?(this: CommonThis<P>, key: keyof P, value: Prop): void
        connected?(this: CommonThis<P>): void
        disconnected?(this: CommonThis<P>): void
    };
    setup?(this: HTMLElement & P, shadowRoot: ShadowRoot): M;
}
const baseStyle = `:host{
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: normal;
}`

const initBaseStyle = function (shadowRoot: ShadowRoot): void {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(baseStyle)
    shadowRoot.adoptedStyleSheets.push(sheet)
}
const setStyle = (shadowRoot: ShadowRoot, style?: string): void => {
    try {
        initBaseStyle(shadowRoot)
        const sheet = new CSSStyleSheet()
        sheet.replaceSync(style ?? "")
        shadowRoot.adoptedStyleSheets.push(sheet)
    } catch {
        const styleEle = document.createElement("style")
        styleEle.textContent = (baseStyle + '\n' + style)
        shadowRoot.insertBefore(styleEle, shadowRoot.firstChild)
    }
}

export const autoSetAttr = (element: HTMLElement, props: {
    [key: string]: Prop
}) => {
    Object.keys(props).forEach(key => {
        if (!element.getAttribute(key))
            element.setAttribute(key, String(props[key]))
    })
}
export const initElement = <M, P extends { [name: string]: Prop }>(config: Config<M, P>): {
    new(): P & HTMLElement & M
    readonly defineElement: () => void
    prototype: HTMLElement
} => {
    class InitElement extends HTMLElement {
        [key: string]: any
        static observedAttributes = Object.keys(config.props || {})
        static defineElement() {
            customElements.define(config.name, this)
        }
        #props: P = {} as P
        #propsType = (() => {
            const types = {} as {
                [name: string]: any
            }
            for (const key in config.props) {
                types[key] = typeof config.props[key]
            }
            return types
        })()
        constructor() {
            super()
            const shadowRoot = this.attachShadow({ mode: "open" })
            shadowRoot.innerHTML = config.template ?? ""
            setStyle(shadowRoot, config.style)
            const { props } = config || { props: {} }
            this.#props = { ...props } as P
            for (const key in props) {
                Object.defineProperty(this, key, {
                    get: () => {
                        return this.#props?.[key]
                    },
                    set: (value) => {
                        const attr = this.getAttribute(key)
                        let _value: Prop
                        switch (this.#propsType[key]) {
                            case 'number':
                                _value = Number(value)
                                break
                            case 'boolean':
                                _value = value == "true"
                                break
                            case 'string':
                                _value = String(value)
                                break
                            default:
                                _value = String(value)
                                break
                        }
                        if (this.#props[key] != value) {
                            this.#props[key] = _value as any
                            config?.dispatch?.propChanged?.call?.<typeof this & P, any, void>(this as typeof this & P, key, value)
                        }
                        if (attr == value) return
                        const lowerCaseProp = key.toLowerCase()
                        if (config.syncProps?.includes(key))
                            this.setAttribute(lowerCaseProp, value)
                    }
                })
            }
            const exposes = config?.setup?.call<typeof this & P, any, M | void>(this as any, shadowRoot) || ({} as M)
            for (const key in exposes) {
                Object.defineProperty(this, key, { get: () => exposes[key] })
            }
        }
        connectedCallback() {
            config.dispatch?.connected?.call(this as unknown as HTMLElement & P)
        }
        disconnectedCallback() {
            config.dispatch?.disconnected?.call(this as unknown as HTMLElement & P)
        }
        attributeChangedCallback(key: string, oldValue: unknown, newValue: string | null) {
            this[key] = newValue ?? ""
        }
    }
    return InitElement as never
}