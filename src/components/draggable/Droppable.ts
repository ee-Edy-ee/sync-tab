import { h, defineComponent } from "vue";
import emitter from "@/helpers/EventHub";

export default defineComponent({
    functional: true,
    name: "Droppable",
    props: {
        tag: {
            type: String,
            default: "div"
        }
    },
    setup(props, { slots }) {
        return () =>
            h(
                props.tag,
                {
                    style: [{ backgroundColor: "#34495E", border: "3px solid black", marginTop: "15px" }],
                    mouseover: (event: MouseEvent) => emitter.emit("handleMouseOverEvent", event)
                },
                [slots.default?.()]
            );
    }
});
