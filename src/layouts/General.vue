<template>
    <section class="app-wrapper text-light">
        <v-header />
        <v-content><slot /></v-content>
        <v-footer />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VHeader from "@/layouts/partials/VHeader.vue";
import VContent from "@/layouts/partials/VContent.vue";
import VFooter from "@/layouts/partials/VFooter.vue";

export default defineComponent({
    name: "general",
    components: {
        "v-content": VContent,
        "v-header": VHeader,
        "v-footer": VFooter
    },
    setup() {
        return {};
    }
});
</script>

<style lang="scss">
@import "@/styles/global.scss";
@import "@/styles/layout/general.scss";
@import "@/styles/vue-components/link.scss";
</style>
