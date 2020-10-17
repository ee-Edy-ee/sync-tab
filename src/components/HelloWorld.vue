<template>
    <div class="container">
        <div class="hello">
            <h1>{{ msg }}</h1>

            <a href="javascript:void(0)" class="btn btn-primary" v-ripple>Test</a>
            <a href="javascript:void(0)" class="btn btn-warning" v-ripple>Test</a>
            <a href="javascript:void(0)" class="btn btn-success" v-ripple>Test</a>
            <a href="javascript:void(0)" class="btn btn-info" v-ripple>Test</a>

            <div class="bg-dark" v-ripple="{ class: 'text-light' }" style="height: 50px; width: 200px"></div>
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
