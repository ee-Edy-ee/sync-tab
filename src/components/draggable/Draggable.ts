/* eslint-disable @typescript-eslint/no-unused-vars */
import { h, defineComponent, reactive } from "vue";

export default defineComponent({
    functional: true,
    name: "Draggable",
    props: {
        tag: {
            type: String,
            default: "div"
        }
    },

    setup(props, { slots }) {
        function handleEvent(event: Event) {
            console.log(event.type);
        }

        return () =>
            h(
                props.tag,

                {
                    onClick: (event: Event) => handleEvent(event),
                    onKeyPress: (event: Event) => handleEvent(event),
                    // onKeyDown: (event: Event) => handleEvent(event),
                    // onKeyUp: (event: Event) => handleEvent(event),
                    onMouseDown: (event: Event) => handleEvent(event),
                    onMouseUp: (event: Event) => handleEvent(event),
                    onMouseMovePassive: (event: Event) => handleEvent(event),
                    onTouchStartPassive: (event: Event) => handleEvent(event),
                    onTouchMovePassive: (event: Event) => handleEvent(event),
                    onTouchEndPassive: (event: Event) => handleEvent(event)
                },

                [slots.default?.()]
            );
    }
});
