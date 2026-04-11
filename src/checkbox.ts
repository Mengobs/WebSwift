import { initElement, autoSetAttr } from "./core/element";
const props = {
    state: "on",
    disabled: "false"
}
export class Checkbox extends initElement({
    name: "swift-checkbox",
    template: `<div type>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 106.592 109.131">
        <g>
            <rect height="109.131" opacity="0" width="106.592" x="0" y="0"/>
            <path d="M39.502 109.131C41.7969 109.131 43.5059 108.105 44.7754 106.25L105.225 11.4746C106.201 9.96094 106.592 8.78906 106.592 7.61719C106.592 4.63867 104.639 2.68555 101.66 2.68555C99.6094 2.68555 98.3887 3.41797 97.168 5.41992L39.2578 96.9238L9.66797 59.3262C8.34961 57.5195 7.08008 56.7383 5.07812 56.7383C2.09961 56.7383 0 58.7891 0 61.7188C0 62.9883 0.488281 64.3066 1.5625 65.625L34.0332 106.152C35.6445 108.203 37.2559 109.131 39.502 109.131Z" fill="black" fill-opacity="0.85"/>
        </g>
    </svg>
</div>
<p><slot></slot></p>`,
    style: `:host {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  font-family: "SFPro-Regular";
  font-size: 13px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
:host div[type] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 3.5px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0)), #007aff;
  /* background: #007aff; */
  margin-right: 7px;
  box-shadow: 0 0.5px 3px rgba(0, 122, 255, 0.12), 0 1px 2px rgba(0, 122, 255, 0.12), 0 0.5px 1px rgba(0, 122, 255, 0.24);
}
:host p,
:host svg {
  margin: 0;
}
:host([state=off]) div[type] {
  background: #fff;
  border: inset 0.5px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 0 2px rgba(0, 0, 0, 0.1);
}
:host(:active) {
  filter: brightness(0.9);
}`,
    props,
    syncProps: ["state", "disabled"],
    setup(_shadow) {
        this.addEventListener("click", () => (this.state = this.state == "on" ? "off" : "on"))
        return {}
    },
    dispatch: {
        connected() {
            autoSetAttr(this, props)
        }
    }
}) { }

Checkbox.defineElement();