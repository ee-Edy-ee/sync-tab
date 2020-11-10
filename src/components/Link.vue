<template>
    <a :href="url">
        <div class="card">
            <div class="card-header">
                <div class="card-title">{{ name }}</div>
            </div>
            <div class="card-body">
                <img :src="icon" alt="logo" style="height: 50px;" />
            </div>
        </div>
    </a>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "link",
    props: {
        url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    setup(props) {
        // eslint-disable-next-line vue/no-setup-props-destructure
        const url = props.url;
        const domain = new URL(url).hostname;
        const icon = `https://favicons.githubusercontent.com/${domain}`;

        return { icon };
    }
});
</script>

<style scoped></style>
