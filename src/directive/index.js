//=====================================拖动====================================//
class DragApp {
    constructor(el) {
        this.el = el;
        this.offsetX = null;
        this.offsetY = null;
        this.isdrag = false;
        this.handleEvent();
    }
    handleEvent() {
        this.el.addEventListener("mousedown", (e) => {
            this.el.style.cursor = "move";
            this.offsetX = e.offsetX;
            this.offsetY = e.offsetY;
            this.isdrag = true;
        }, false);
        this.el.addEventListener("mouseup", (e) => {
            this.isdrag = false;
            this.el.style.cursor = "auto";
        }, false);
        this.el.addEventListener("mousemove", (e) => {
            if (this.isdrag) {
                this.el.style.position = "fixed";
                if (e.clientX - this.offsetX < 0) {
                    this.el.style.left = 0;
                } else if (e.clientX - this.offsetX >= document.documentElement.clientWidth - 100) {
                    this.el.style.left = document.documentElement.clientWidth - 100;
                } else {
                    this.el.style.left = e.clientX - this.offsetX + "px";
                }
                if (e.clientY - this.offsetY < 0) {
                    this.el.style.top = 0;
                } else if (e.clientY - this.offsetY >= document.documentElement.clientHeight - 100) {
                    this.el.style.top = document.documentElement.clientHeight - 100 + "px";
                } else {
                    this.el.style.top = e.clientY - this.offsetY + "px";
                }
            }
        }, false);
        this.el.addEventListener("mouseleave", () => {
            this.isdrag = false;
            this.el.style.cursor = "auto";
        }, false);
    }
}
//=====================================指令====================================//
export default function directive(app) {
    app
        .directive("focus", {
            mounted(el) {
                el.focus();
            }
        })
        .directive("drag", {
            mounted(el) {
                new DragApp(el);
            }
        })
}
