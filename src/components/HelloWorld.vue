<template>
    <div class="container">
        <div class="hello">
            <h1>{{ msg }}</h1>

            <button class="btn btn-success" v-ripple>Hello Button</button>

            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" v-ripple>Left</button>
                <button type="button" class="btn btn-primary" v-ripple>Middle</button>
                <button type="button" class="btn btn-primary" v-ripple>Right</button>
            </div>

            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
            </div>
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
