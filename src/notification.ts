import { initElement } from "./core/element";
class Notification extends initElement({
    name: "swift-notification",
    template: `<img /><div>
    <slot name="title"></slot>
    <slot name="text"></slot>
</div>
<slot name="time"></slot>`,
    style: `@keyframes in {
  0% {
    transform: translateX(400px);
    opacity: 0;
  }
  75% {
    transform: translateX(0);
  }
  100% {
    opacity: 1;
  }
}
@keyframes out {
  0% {
    opacity: 1;
  }
  75% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(400px);
    opacity: 0;
  }
}
:host {
  width: 346px;
  height: 76px;
  background: rgba(246, 246, 246, 0.6);
  border-radius: 16px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.25), 0 0 3px 0 rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  -webkit-backdrop-filter: blur(30px);
          backdrop-filter: blur(30px);
  animation: in 0.4s ease;
}
:host(.close) {
  animation: out 0.4s ease;
}
:host img {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 8px;
}
::slotted([slot=title]) {
  font-family: "SFPro-Semibold", "PingFangSC-Semibold";
  font-size: 13px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 16px;
  margin: 0;
}
::slotted([slot=text]) {
  font-family: "SFPro-Regular", "PingFangSC-Regular";
  font-size: 13px;
  margin-top: 1.5px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 16px;
  width: 255px;
  margin: 0;
}
::slotted([slot=time]) {
  font-family: "SFPro-Regular", "PingFangSC-Regular";
  font-size: 11px;
  color: #BFBFBF;
  line-height: 14px;
  align-self: flex-start;
  margin: 0;
  margin-top: 12px;
  margin-right: 14px;
}`,
    props: {
        command: "",
        iconpath: ""
    },
    syncProps: ["command", "iconpath"],
    setup(shadow) {
        const icon = shadow.querySelector("img") as HTMLImageElement;
        const command = new Function(this.command);
        let is_mousedown: Boolean;
        icon.src = this.iconpath;
        this.addEventListener("mousedown", () => {
            is_mousedown = true;
            this.style.filter = "brightness(0.9)";
        });
        window.addEventListener("mouseup", () => {
            if (!is_mousedown)
                return;
            is_mousedown = false;
            this.style.filter = "brightness(1)";
            command();
        });
    }
}) {
}
Notification.define();
