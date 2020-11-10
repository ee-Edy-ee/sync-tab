<template>
    <div class="home">
        <div v-if="!loaded">Loading......</div>
        <div class="row" v-else>
            <div class="col-4" v-for="link in links" v-bind:key="link.id">
                <web-link :name="link.name" :url="link.url" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Link from "@/components/Link.vue"; // @ is an alias to /src
import { defineComponent, ref } from "vue";
import { linksCollection } from "@/util/firebase";

export default defineComponent({
    name: "home",
    components: {
        "web-link": Link
    },

    setup() {
        const loaded = ref(0);
        const links = ref<Array<{ id: string; name: string; url: string }>>([]);

        linksCollection
            .get()
            .then(querySnapshot => {
                links.value = [];
                loaded.value = 1;
                querySnapshot.forEach(doc => {
                    links.value.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url
                    });
                });

                return links;
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });

        return { links, loaded };
    }
});
</script>
