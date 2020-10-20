<template>
    <div class="container">
        <div class="hello">
            <h1>{{ msg }}</h1>
            <button class="btn btn-success" v-ripple>Hello Button</button>
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
