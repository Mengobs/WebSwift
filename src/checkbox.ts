import { initElement, autoSetAttr } from "./core/element";
const props = {
    state: "on",
    disabled: "false"
}
export class Checkbox extends initElement({
    name: "swift-checkbox",
    template: `<div type>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.97949 8.61816">
    <g>
        <rect height="8.61816" opacity="0" width="8.97949" x="0" y="0"/>
        <path d="M3.18359 8.61816C3.39355 8.61816 3.55957 8.52539 3.67676 8.34473L8.29102 1.0791C8.37891 0.9375 8.41309 0.830078 8.41309 0.717773C8.41309 0.449219 8.2373 0.273438 7.96875 0.273438C7.77344 0.273438 7.66602 0.336914 7.54883 0.522461L3.16406 7.50977L0.888672 4.53125C0.766602 4.36035 0.644531 4.29199 0.46875 4.29199C0.19043 4.29199 0 4.48242 0 4.75098C0 4.86328 0.0488281 4.99023 0.141602 5.10742L2.67578 8.33496C2.82227 8.52539 2.97363 8.61816 3.18359 8.61816Z" 
              fill="black" 
              stroke="black" 
              stroke-opacity="0.85" 
              stroke-width="0.6" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
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
:host div[type] svg {
  width: 8px;
  height: 8px;
  filter: invert(1);
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