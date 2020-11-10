import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";
import Ripple from "@/directives/ripple";
import store from "@/store";

import "@/registerServiceWorker";

const app = createApp(App);

app.directive(Ripple.name, Ripple.directive);
app.use(store);
app.use(router);

router.isReady().then(() => {
    app.mount("#app");
});
