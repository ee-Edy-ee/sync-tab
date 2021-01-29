import { h, defineComponent } from "vue";

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
        return () => h(props.tag, [slots.default?.()]);
    }
});
