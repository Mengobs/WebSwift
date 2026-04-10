import { initElement } from "./core/element";

export class Tooltip extends initElement({
    name: "swift-tooltip",
    template: `<p><slot></slot></p>`,
    style: `:host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 3px 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 0, 0, 0.12);
    background: rgba(246, 246, 246, 0.72);

    p {
        margin: 0;
        font-family: "SFPro-Medium", "PingFangSC-Medium";
        font-size: 11px;
    }
}`,
    props: {},
    syncProps: [],
}) {}

Tooltip.defineElement();