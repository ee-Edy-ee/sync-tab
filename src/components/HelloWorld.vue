<template>
    <div class="container">
        <div class="hello">
            <h1>{{ msg }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props: {
        msg: String
    }
})
export default class HelloWorld extends Vue {
    msg!: string;
}
</script>

<style lang="scss">
@import "~@/styles/global.scss";
</style>
