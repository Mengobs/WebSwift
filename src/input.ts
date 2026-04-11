import { initElement } from "./core/element";

class Input extends initElement({
    name: "swift-input",
    template: `<svg icon version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122.021 123.193">
    <g>
        <rect height="123.193" opacity="0" width="122.021" x="0" y="0"/>
        <path d="M0 49.4141C0 76.6113 22.168 98.7793 49.4141 98.7793C60.4004 98.7793 70.5078 95.166 78.7109 89.0625L110.889 121.289C112.109 122.559 113.818 123.193 115.576 123.193C119.434 123.193 122.021 120.264 122.021 116.602C122.021 114.795 121.387 113.232 120.215 112.012L88.1836 79.834C94.8242 71.4844 98.8281 60.8887 98.8281 49.4141C98.8281 22.168 76.6602 0 49.4141 0C22.168 0 0 22.168 0 49.4141ZM9.13086 49.4141C9.13086 27.1973 27.1973 9.13086 49.4141 9.13086C71.6309 9.13086 89.6484 27.1973 89.6484 49.4141C89.6484 71.582 71.6309 89.6484 49.4141 89.6484C27.1973 89.6484 9.13086 71.582 9.13086 49.4141Z" fill="black" fill-opacity="0.85"/>
    </g>
</svg>
<input placeholder="Placeholder" />
<svg clear version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.8008 25.459">
 <g>
  <rect height="25.459" opacity="0" width="25.8008" x="0" y="0"/>
  <path d="M25.4395 12.7246C25.4395 19.7266 19.7266 25.4395 12.7148 25.4395C5.71289 25.4395 0 19.7266 0 12.7246C0 5.71289 5.71289 0 12.7148 0C19.7266 0 25.4395 5.71289 25.4395 12.7246ZM16.3477 7.87109L12.7148 11.4844L9.10156 7.88086C8.92578 7.70508 8.73047 7.61719 8.47656 7.61719C7.97852 7.61719 7.57812 7.99805 7.57812 8.49609C7.57812 8.74023 7.67578 8.95508 7.85156 9.13086L11.4551 12.7344L7.85156 16.3379C7.67578 16.5137 7.57812 16.7383 7.57812 16.9727C7.57812 17.4805 7.97852 17.8809 8.47656 17.8809C8.73047 17.8809 8.95508 17.7832 9.13086 17.6074L12.7148 14.0039L16.3086 17.6074C16.4844 17.7832 16.709 17.8809 16.9629 17.8809C17.4609 17.8809 17.8613 17.4805 17.8613 16.9727C17.8613 16.7285 17.7832 16.5039 17.5977 16.3281L13.9941 12.7344L17.6074 9.12109C17.8027 8.92578 17.8711 8.73047 17.8711 8.47656C17.8711 7.98828 17.4707 7.59766 16.9824 7.59766C16.7383 7.59766 16.543 7.67578 16.3477 7.87109Z" fill="black" fill-opacity="0.85"/>
 </g>
</svg>
<div fill></div>`,
    style: `:host {
  width: 206px;
  height: 22px;
  position: relative;
  display: inline-flex;
  align-items: center;
  filter: brightness(1);
}
:host svg[icon] {
  display: none;
  width: 14px;
  height: 14px;
}
:host input {
  width: calc(100% - 14px);
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  padding: 0 7px;
  font-family: "SFPro-Regular", "PingFangSC-Regular";
}
:host input:focus ~ div[fill] {
  outline: 3px solid rgba(0, 122, 255, 0.5);
}
:host input:focus ~ svg[clear] {
  opacity: 0.25;
  pointer-events: initial;
}
:host input::-moz-placeholder {
  font-family: "SFPro-Regular", "PingFangSC-Regular";
  font-size: 13px;
  color: rgba(0, 0, 0, 0.25);
  line-height: 16px;
}
:host input::placeholder {
  font-family: "SFPro-Regular", "PingFangSC-Regular";
  font-size: 13px;
  color: rgba(0, 0, 0, 0.25);
  line-height: 16px;
}
:host div[fill] {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  outline: 9px solid transparent;
  transition: outline 0.22s ease;
  pointer-events: none;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(0, 0, 0, 0.05);
}
:host svg[clear] {
  opacity: 0;
  position: absolute;
  right: 3px;
  top: 3px;
  width: 16px;
  height: 16px;
  transition: opacity 0.25s ease;
}
:host([type=search]) svg[icon] {
  display: block;
  margin-left: 7px;
}
:host([type=search]) input {
  width: calc(100% - 35px);
  padding-left: 28px;
}
:host([type=search]) div[fill] {
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
:host([disabled=true]) { pointer-events: none }
:host([disabled=true]) div[fill] {
  background: rgba(255, 255, 255, 0.5) !important;
}
:host([disabled=true][type=search]) svg[icon] {
  opacity: 0.5;
}
:host svg[clear]:active{
filter: brightness(0.9);
}`,
    props: {
        type: "",
        disabled: "false",
        placeholder: "",
        value: ""
    },
    syncProps: ["type", "disabled", "placeholder", "value"],
    setup(shadow) {
        const clear_e = shadow.querySelector("svg[clear]") as HTMLElement;
        const input = shadow.querySelector("input") as HTMLInputElement;
        const host = this as unknown as HTMLElement;

        const placeholder = host.getAttribute('placeholder') || '';
        const value = host.getAttribute('value') || '';
        input.placeholder = placeholder;
        input.value = value;

        const clear = () => {
            this.value = ""
            input.value = ""
        }
        input.addEventListener("input", () => this.value = input.value)
        clear_e.addEventListener("mousedown", () => {
            input.focus()
        })
        clear_e.addEventListener("click", () => {
            input.focus()
            clear()
        })
        return {
            clear
        }
    }
}) { }

Input.defineElement();