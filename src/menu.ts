import { initElement } from "./core/element";

export class Menu extends initElement({
    name: "swift-menu",
    template: `<slot></slot>`,
    style: `:host {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: auto;
  border: outset 0.5px rgba(0, 0, 0, 0.06);
  box-shadow: inset 0 0.5px 1px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.15), 0 8px 15px rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(246, 246, 246, 0.6);
  backdrop-filter: blur(30px) saturate(200%);
  padding: 5px 5px;
}
:host ::slotted(p) {
  margin: 0;
  font-family: "SFPro-Regular", "PingFangSC-Regular";
  font-weight: 510;
  font-size: 13px;
  line-height: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  padding: 3px 10px;
}
:host ::slotted(p:hover) {
  background: #0a82ff;
  color: #fff;
  border-radius: 5px;
}`,
    props: {
        width: "auto",
    },
    syncProps: ["width"],
    setup(shadow) {
        return {}
    },
    dispatch: {
        connected() {
            let width = this.width;
            if (width == "auto") {
                this.style.width = width;
            } else {
                this.style.width = width + "px";
            }
        }
    }
}) { }

Menu.defineElement();