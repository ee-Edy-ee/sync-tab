<template>
    <div class="home">
        <div v-if="!loaded">Loading......</div>
        <!-- <transition-group type="transition" :name="!isDragging ? 'flip-list' : null"></tran sition-group> -->
        <!-- <web-link :link="new LinkClass(link.id, link.title, link.url, link.color, link.active)" @click="event => onClick(event)" /> -->
        <DragDropContext class="container">
            <Droppable :class="{ 'card-containers': false, 'is-draggable': isDragging }" tag="div" :v-model="links" @start="onStart()" @end="onEnd($event)" v-bind="dragOptions">
                <Draggable v-for="link in links" :key="link.id">
                    <div class="btn btn-primary m-2 p-2">{{ link.title }}</div>
                </Draggable>
            </Droppable>

            <Droppable :class="{ 'card-containers': false, 'is-draggable': isDragging }" tag="div" style="height: 300px"></Droppable>
        </DragDropContext>
    </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

// import Link from "@/components/Link.vue";
import { defineComponent, ref } from "vue";
import { CustomEvent, LinkType, Link as LinkClass } from "@/interfaces/Link";
import { DragDropContext, Droppable, Draggable } from "@/components/draggable";

// import { linksCollection } from "@/util/firebase";

export default defineComponent({
    name: "home",
    components: {
        // "web-link": Link,
        DragDropContext,
        Droppable,
        Draggable
    },

    setup() {
        const loaded = ref(1);
        const links = ref<LinkType[]>([
            { id: "11a3-1231-asd11", url: "https://sync-tab.local.dev/", title: "test1", active: false },
            { id: "41a3-1231-asd14", url: "https://sync-tab.local.dev/", title: "test4", active: false },
            { id: "21a3-1231-asd12", url: "https://sync-tab.local.dev/", title: "test2", active: false }
            // { id: "31a3-1231-asd13", url: "https://sync-tab.local.dev/", title: "test3", active: false },
            // { id: "51a3-1231-asd15", url: "https://sync-tab.local.dev/", title: "test5", active: false },
            // { id: "61a3-1231-asd16", url: "https://sync-tab.local.dev/", title: "test6", active: false },
            // { id: "11a3-1231-asd112", url: "https://sync-tab.local.dev/", title: "test1", active: false },
            // { id: "41a3-1231-asd142", url: "https://sync-tab.local.dev/", title: "test4", active: false },
            // { id: "21a3-1231-asd122", url: "https://sync-tab.local.dev/", title: "test2", active: false },
            // { id: "31a3-1231-asd132", url: "https://sync-tab.local.dev/", title: "test3", active: false },
            // { id: "51a3-1231-asd152", url: "https://sync-tab.local.dev/", title: "test5", active: false },
            // { id: "61a3-1231-asd162", url: "https://sync-tab.local.dev/", title: "test6", active: false }
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

<style lang="scss" scoped></style>
