/* eslint-disable @typescript-eslint/no-unused-vars */
import { h, defineComponent, reactive } from "vue";
import emitter from "@/helpers/EventHub";

export default defineComponent({
    functional: true,
    name: "Draggable",
    props: {
        tag: {
            type: String,
            default: "div"
        }
    },
    setup(props, { emit, slots }) {
        return () =>
            h(
                props.tag,
                {
                    tabindex: 0, // make the element focusable
                    // onKeyPress: (event: KeyboardEvent) => emitter.emit("handleKeyboardEvent", event),
                    // onKeyDown: (event: KeyboardEvent) => emitter.emit("handleKeyboardEvent", event),
                    // onKeyUp: (event: KeyboardEvent) => emitter.emit("handleKeyboardEvent", event),

                    onMouseDownPassive: (event: MouseEvent) => emitter.emit("handleMouseEvent", event),
                    onMouseUpPassive: (event: MouseEvent) => emitter.emit("handleMouseEvent", event),
                    onMouseMovePassive: (event: MouseEvent) => emitter.emit("handleMouseEvent", event)

                    // onTouchStartPassive: (event: Event) => emitter.emit("handleTouchEvent", event),
                    // onTouchMovePassive: (event: Event) => emitter.emit("handleTouchEvent", event),
                    // onTouchEndPassive: (event: TouchEvent) => emitter.emit("handleTouchEvent", event)
                },
                [slots.default?.()]
            );
    }
});
