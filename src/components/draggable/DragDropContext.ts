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

        const style = computed(() => {
            if (position.init) {
                return {
                    position: "absolute",
                    left: position.x + "px",
                    top: position.y + "px",
                    width: position.width + "px",
                    height: position.height + "px",
                    "box-shadow": position.isDragging ? "3px 6px 16px rgba(0, 0, 0, 0.15)" : "",
                    transform: position.isDragging ? "translate(-3px, -6px)" : "",
                    cursor: position.isDragging ? "grab" : "pointer"
                };
            }
            return {};
        });

        function handleMouseEvent(event) {
            if (event.type == "mousedown" && !position.init) {
                console.log("start");
                position.init = true;
            }
            if (event.type == "mouseup") {
                position.init = false;
                console.log("stop");
            }

            if (event.type == "mousemove" && position.init) {
                position.init = true;
                position.x = Math.round(event.x);
                position.y = Math.round(event.y);
                position.width = Math.round(event.width);
                position.height = Math.round(event.height);
            }
        }

        emmiter.on("handleMouseEvent", e => handleMouseEvent(e));
        // emmiter.on("handleTouchEvent", e => console.log("touch"));
        // emmiter.on("handleKeyboardEvent", e => console.log("keyboard"));

        return () =>
            h(
                props.tag,
                {
                    style: {
                        position: "absolute",
                        transform: "translate(" + position.x + "px," + position.y + "px)",
                        width: position.width + "px",
                        height: position.height + "px",
                        cursor: position.isDragging ? "grab" : "pointer"
                    },
                    tabindex: 0 // make the element focusable
                },
                [slots.default?.()]
            );
    }
});
