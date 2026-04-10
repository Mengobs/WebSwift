import { initElement, autoSetAttr } from "./core/element";
const props = {
  state: "on",
  disabled: "false"
}
export class Switch extends initElement({
  name: "swift-switch",
  template: `<div oval></div><div fill></div>`,
  style: `:host {
  width: 26px;
  height: 15px;
  position: relative;
  display: block;
  filter: brightness(1);
}
:host div[oval] {
  background: #fff;
  width: 12px;
  height: 12px;
  border-radius: 6.5px;
  position: absolute;
  transition: all .25s ease;
  box-sizing: border-box;
}
:host div[fill] {
  width: 100% ;
  height: 100%;
  border-radius: 11px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .25s ease;
}
:host([state=on]) div[oval] {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);
  left: calc(100% - 1.5px - 12px);
  right: 1.5px;
  top: 1.5px;
}
:host([state=on]) div[fill] {
  background: #2c7af1;
  box-shadow: inset 0 3px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 2px 0 rgba(0, 0, 0, 0.05);
}
:host([state=off]) div[oval] {
  right: calc(100% - 1.5px - 12px);
  left: 1.5px;
  top: 1.5px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15), 0 1px 0 0 rgba(0, 0, 0, 0.05);
}
:host([state=off]) div[fill] {
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.02), inset 0 0 1px 0 rgba(0, 0, 0, 0.12);
}
:host([disabled=true]) {
  pointer-events: none;
}
:host([disabled=true]) div[oval] {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15), 0 1px 0 0 rgba(0, 0, 0, 0.05);
  pointer-events: none;
}
:host([disabled=true]) div[fill] {
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.02), inset 0 0 1px 0 rgba(0, 0, 0, 0.12);
  pointer-events: none;
}
:host(:active) {
  filter: brightness(0.9);
}`,
  props,
  syncProps: ["state", "disabled"],
  setup(_shadow) {
    this.addEventListener("click", () => (this.state = this.state == "on" ? "off" : "on"))
    return {
      open() {
        //组件的回调函数
      }
    }
  },
  dispatch: {
    connected() {
      autoSetAttr(this, props)
    }
  }
}) { }

Switch.defineElement();