import { createApp } from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import Ripple from "@/directives/ripple";

const app = createApp(App);
app.directive(Ripple.name, Ripple.directive);

app.use(store)
    .use(router)
    .mount("#app");

console.log(process.env.NODE_ENV);
