import { initElement } from "./core/element";

export class Window extends initElement({
    name: "swift-window",
    template: `<div titlebar>
    <div wintools>
        <div oval close id=close>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.1197 19.7779">
                <g>
                    <rect height="19.7779" opacity="0" width="20.1197" x="0" y="0"/>
                    <path d="M0.27467 19.5032C0.65553 19.8645 1.261 19.8645 1.63209 19.5032L9.87428 11.2512L18.1262 19.5032C18.4876 19.8645 19.1126 19.8743 19.4739 19.5032C19.845 19.1223 19.845 18.5169 19.4739 18.1555L11.2317 9.90358L19.4739 1.65162C19.845 1.2903 19.8547 0.675061 19.4739 0.303967C19.1028-0.0573608 18.4876-0.0573608 18.1262 0.303967L9.87428 8.55592L1.63209 0.303967C1.261-0.0573608 0.645764-0.0671265 0.27467 0.303967C-0.0866577 0.684827-0.0866577 1.2903 0.27467 1.65162L8.52662 9.90358L0.27467 18.1555C-0.0866577 18.5169-0.0964233 19.1321 0.27467 19.5032Z" fill="black"/>
                </g>
            </svg>
        </div>
        <div oval minimize>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.918 1.94336">
                <g>
                    <rect height="1.94336" opacity="0" width="20.918" x="0" y="0"/>
                    <path d="M0.957031 1.94336L19.5996 1.94336C20.1172 1.94336 20.5566 1.50391 20.5566 0.986328C20.5566 0.458984 20.1172 0.0292969 19.5996 0.0292969L0.957031 0.0292969C0.439453 0.0292969 0 0.458984 0 0.986328C0 1.50391 0.439453 1.94336 0.957031 1.94336Z" fill="black"/>
                </g>
            </svg>
        </div>
        <div oval zoom>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.2383 23.8965">
                <g>
                    <rect height="23.8965" opacity="0" width="24.2383" x="0" y="0"/>
                    <path d="M0.986328 10.0293C1.55273 10.0293 1.95312 9.60938 1.95312 9.0332L1.95312 7.31445L1.72852 3.00781L5.36133 6.76758L9.36523 10.8105C9.55078 10.9961 9.78516 11.0938 10.0488 11.0938C10.6543 11.0938 11.0938 10.6934 11.0938 10.0879C11.0938 9.81445 10.9961 9.56055 10.8008 9.36523L6.77734 5.33203L3.00781 1.71875L7.32422 1.94336L9.04297 1.94336C9.60938 1.94336 10.0488 1.55273 10.0488 0.976562C10.0488 0.400391 9.61914 0 9.04297 0L1.71875 0C0.634766 0 0 0.634766 0 1.71875L0 9.0332C0 9.58984 0.410156 10.0293 0.986328 10.0293ZM14.834 23.8867L22.1484 23.8867C23.2422 23.8867 23.877 23.252 23.877 22.168L23.877 14.8535C23.877 14.2969 23.4668 13.8574 22.8906 13.8574C22.3242 13.8574 21.9238 14.2773 21.9238 14.8535L21.9238 16.5723L22.1484 20.8789L18.5059 17.1191L14.5117 13.0762C14.3262 12.8906 14.082 12.793 13.8281 12.793C13.2227 12.793 12.7832 13.1934 12.7832 13.7988C12.7832 14.0723 12.8809 14.3262 13.0762 14.5215L17.0996 18.5547L20.8691 22.168L16.543 21.9434L14.834 21.9434C14.2676 21.9434 13.8281 22.334 13.8281 22.9102C13.8281 23.4863 14.2578 23.8867 14.834 23.8867Z" fill="black"/>
                </g>
            </svg>
        </div>
    </div>
    <p title></p>
</div>
<div content><slot></slot></div>`,
    style: `:host {
  width: 400px;
  height: 300px;
  background: #fff;
  box-shadow: 0 36px 100px 0 rgba(0, 0, 0, 0.35), 0 0 3px 0 rgba(0, 0, 0, 0.23), inset 0 0 3px 0 rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: block;
  min-width: 86px;
  min-height: 38px;
  resize: both;
  font-size: 13px;
  font-family: "SFPro-Regular", "PingFangSC-Regular";
}
:host::-webkit-resizer {
  display: none;
}
:host div[titlebar] {
  width: 100%;
  height: 28px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(245, 245, 245);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
  cursor: default;
  user-select: none;
  -webkit-user-select: none;
}
:host div[titlebar] div[wintools] {
  width: auto;
  height: 12px;
  display: inline-flex;
  position: absolute;
  top: 8px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
}
:host div[titlebar] div[wintools]:hover div[oval] svg {
  display: initial;
}
:host div[titlebar] div[wintools] div[oval] {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
:host div[titlebar] div[wintools] div[oval] svg {
  width: 100%;
  height: 100%;
  scale: 0.5;
  display: none;
}
:host div[titlebar] div[wintools] div[close] {
  background: #ff5f57;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
}
:host div[titlebar] div[wintools] div[minimize] {
  background: #febc2e;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
}
:host div[titlebar] div[wintools] div[zoom] {
  background: #28c840;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
}
:host div[titlebar] p[title] {
  font-size: 13px;
  font-family: "SFPro-Bold", "PingFangSC-Bold";
  max-width: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
:host div[content] {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}`,
    props: {
        title: "",
        width: 0,
        height: 0,
    },
    syncProps: ["title", "width", "height"],
    setup(shadow) {
        setTimeout(() => {
            let title = this.title;
            shadow.querySelector("p[title]")!.innerHTML = title;
            let width = this.width;
            let height = this.height;
            this.style.width = width + ((!String(width).endsWith("%")) ? "px" : "");
            this.style.height = height + "px";
        })

        const ovals = shadow.querySelectorAll("div[oval]");
        let is_mousedown: boolean;

        ovals.forEach(oval => {
            oval.addEventListener("mousedown", () => {
                (oval as HTMLElement).style.filter = "brightness(0.9)";
                is_mousedown = true;
            });
            window.addEventListener("mouseup", () => {
                if (!is_mousedown) return;
                is_mousedown = false;
                (oval as HTMLElement).style.filter = "brightness(1)";
                if (oval.id == "close") {
                    this.parentNode?.removeChild(this);
                }
            });
        });
        return {}
    }
}) { }

Window.defineElement();