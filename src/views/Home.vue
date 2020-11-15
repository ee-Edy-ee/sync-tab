<template>
    <div class="home">
        <div v-if="!loaded">Loading......</div>
        <div class="container" v-else>
            <draggable-container :class="{ 'card-containers': true, 'is-draggable': isDragging }" tag="div" :v-model="links" @start="onStart()" @end="onEnd($event)" v-bind="dragOptions">
                <transition-group type="transition" :name="!isDragging ? 'flip-list' : null">
                    <template v-for="link in links" :key="link.id">
                        <web-link :link="new LinkClass(link.id, link.title, link.url, link.color, link.active)" @click="event => onClick(event)" />
                    </template>
                </transition-group>
            </draggable-container>
        </div>
    </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "@/components/Link.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { defineComponent, ref } from "vue";
import { CustomEvent, LinkType, Link as LinkClass } from "@/interfaces/Link";
// import { linksCollection } from "@/util/firebase";

export default defineComponent({
    name: "home",
    components: {
        "web-link": Link,
        "draggable-container": VueDraggableNext
    },

    setup() {
        const loaded = ref(1);
        const links = ref<LinkType[]>([
            { id: "11a3-1231-asd11", url: "https://sync-tab.local.dev/", title: "test1", active: false },
            { id: "41a3-1231-asd14", url: "https://sync-tab.local.dev/", title: "test4", active: false },
            { id: "21a3-1231-asd12", url: "https://sync-tab.local.dev/", title: "test2", active: false },
            { id: "31a3-1231-asd13", url: "https://sync-tab.local.dev/", title: "test3", active: false },
            { id: "51a3-1231-asd15", url: "https://sync-tab.local.dev/", title: "test5", active: false },
            { id: "61a3-1231-asd16", url: "https://sync-tab.local.dev/", title: "test6", active: false },
            { id: "11a3-1231-asd112", url: "https://sync-tab.local.dev/", title: "test1", active: false },
            { id: "41a3-1231-asd142", url: "https://sync-tab.local.dev/", title: "test4", active: false },
            { id: "21a3-1231-asd122", url: "https://sync-tab.local.dev/", title: "test2", active: false },
            { id: "31a3-1231-asd132", url: "https://sync-tab.local.dev/", title: "test3", active: false },
            { id: "51a3-1231-asd152", url: "https://sync-tab.local.dev/", title: "test5", active: false },
            { id: "61a3-1231-asd162", url: "https://sync-tab.local.dev/", title: "test6", active: false }
        ]);

        const isDragging = ref(false);
        const dragOptions = {
            animation: 200,
            group: "list-links",
            disabled: false,
            ghostClass: "ghost"
        };

        const onStart = () => {
            isDragging.value = true;
            links.value.map(link => {
                link.active = false;
                return link;
            });
        };

        const onEnd = () => {
            isDragging.value = false;
        };

        const onClick = (event: CustomEvent) => {
            links.value.map(link => {
                link.active = event.link.id == link.id ? !event.link.active : false;
                return link;
            });
        };

        // const links = ref<Array<{ id: string; name: string; url: string }>>([]);
        // linksCollection
        //     .get()
        //     .then(querySnapshot => {
        //         links.value = [];
        //         loaded.value = 1;
        //         querySnapshot.forEach(doc => {
        //             links.value.push({
        //                 id: doc.id,
        //                 name: doc.data().name,
        //                 url: doc.data().url
        //             });
        //         });

        //         return links;
        //     })
        //     .catch(error => {
        //         console.log("Error getting documents: ", error);
        //     });

        return { links, loaded, isDragging, onStart, onEnd, onClick, dragOptions, LinkClass };
    }
});
</script>

<style lang="scss" scoped>
.flip-list-move {
    transition: transform 0.5s;
}
.no-move {
    transition: transform 0s;
}
.ghost {
    opacity: 0;
}
.list-group {
    min-height: 20px;
}
.list-group-item {
    cursor: move;
}
.list-group-item i {
    cursor: pointer;
}
</style>
