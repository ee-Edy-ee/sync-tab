<template>
    <div :class="{ 'web-link col-12 col-md-6 col-lg-4 col-xl-3': true, 'is-active': link.active }">
        <figure class="card-container">
            <div class="multi-button">
                <a v-ripple><heart /></a>
                <a v-ripple><pencil /></a>
                <a v-ripple><trash-can /></a>
                <a v-ripple><share /></a>
            </div>
            <a href="#" v-ripple @click="event => onClick(event)" class="settings-button text-info"><cog /></a>
            <a :href="link.url" v-ripple class="card-link text-dark">
                <div class="overlay" :style="{ 'background-color': link.color }"></div>
                <div class="figcaption">
                    <div class="mt-auto">{{ link.title }}</div>
                    <div><small>19 Nov 2020</small></div>
                </div>
            </a>
        </figure>
    </div>
</template>

<script lang="ts">
import { Heart, Pencil, TrashCan, Share, Cog } from "mdue";
import { defineComponent } from "vue";
import { Link } from "@/interfaces/Link";

export default defineComponent({
    name: "web-link",
    props: {
        link: {
            type: Object as () => Link,
            required: true
        }
    },
    emits: ["click"],
    components: {
        Heart,
        Pencil,
        TrashCan,
        Share,
        Cog
    },
    setup(props, { emit }) {
        const onClick = (event: Event) => {
            emit("click", { event: event, link: props.link });
        };

        return { onClick };
    }
});
</script>
