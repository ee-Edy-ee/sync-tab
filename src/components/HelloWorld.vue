<template>
    <div class="container">
        <div class="hello">
            <h1>{{ msg }}</h1>

            <a href="#" class="btn btn-primary" v-ripple="{ class: 'text-danger' }">Test</a>
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
