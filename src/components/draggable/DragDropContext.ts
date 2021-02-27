/* eslint-disable @typescript-eslint/no-unused-vars */
import { h, defineComponent, reactive, computed } from "vue";
import emmiter from "@/helpers/EventHub";

export default defineComponent({
    functional: true,
    name: "DragDropContext",
    props: {
        tag: {
            type: String,
            default: "div"
        }
    },

    setup(props, { slots }) {
        let element;
        const position = reactive({
            init: false,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            isDragging: false,
            dragStartX: null,
            dragStartY: null
        });
        const offset = reactive({
            x: 0,
            y: 0
        });

        const coordonates = function(elem) {
            const box = elem.getBoundingClientRect();

            const body = document.body;
            const docEl = document.documentElement;

            const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

            const clientTop = docEl.clientTop || body.clientTop || 0;
            const clientLeft = docEl.clientLeft || body.clientLeft || 0;

            const top = box.top + scrollTop - clientTop;
            const left = box.left + scrollLeft - clientLeft;

            return { x: Math.round(top), y: Math.round(left) };
        };

        const isOverDroppable = function(el1, el2) {
            el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
            el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
            el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
            el2.offsetRight = el2.offsetLeft + el2.offsetWidth;

            return !(el1.offsetBottom < el2.offsetTop || el1.offsetTop > el2.offsetBottom || el1.offsetRight < el2.offsetLeft || el1.offsetLeft > el2.offsetRight);
        };

        const handleMouseEvent = function(event) {
            if (event.type == "mousedown" && !position.init && !element) {
                position.init = true;
                element = event.target;
                offset.y = coordonates(element).x;
                offset.x = coordonates(element).y;
            }

            position.width = Math.round(event.width);
            position.height = Math.round(event.height);

            if (element) {
                element.style.width = position.width;
                element.style.height = position.height;
                element.style.position = "absolute";

                position.x = position.x - offset.x;
                position.y = position.y - offset.y;

                element.style.transform = "translate(" + position.x + "px," + position.y + "px)";
            }

            if (event.type == "mouseup") {
                position.init = false;
                position.x = 0;
                position.y = 0;
                position.width = 0;
                position.height = 0;
                element.style.position = null;
                element.style.transform = null;
                element = null;
            }
        };

        const handleGlobalMouseEvent = function(event) {
            handleMouseEvent(event);
            position.x = Math.round(event.x);
            position.y = Math.round(event.y);
        };

        const addEventListeners = function() {
            document.addEventListener("mousemove", handleGlobalMouseEvent);
            document.addEventListener("mouseup", handleGlobalMouseEvent);
        };

        const removeEventListeners = function() {
            document.removeEventListener("mousemove", handleGlobalMouseEvent);
        };

        const handleMouseOverEvent = function(e) {
            console.log(e);
        };

        addEventListeners();

        emmiter.on("handleMouseEvent", e => handleMouseEvent(e));
        emmiter.on("handleMouseOverEvent", e => handleMouseOverEvent(e));
        // emmiter.on("handleTouchEvent", e => console.log("touch"));
        // emmiter.on("handleKeyboardEvent", e => console.log("keyboard"));

        return () => h(props.tag, {}, [slots.default?.()]);
    }
});
