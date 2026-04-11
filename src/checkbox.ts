import { initElement, autoSetAttr } from "./core/element";
const props = {
    state: "on",
    disabled: "false"
}
export class Checkbox extends initElement({
    name: "swift-checkbox",
    template: `<div type>
    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
            font-family="SFPro-Bold, SF Pro" font-size="10" font-weight="bold">
            <g id="Controls/Checkbox/Checkbox" transform="translate(-1, -1.5)" fill="#FFFFFF">
                <g id="Checkbox-Type" transform="translate(0, 1)">
                    <text id="􀆅">
                        <tspan x="1.18945312" y="10.5">􀆅</tspan>
                    </text>
                </g>
            </g>
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