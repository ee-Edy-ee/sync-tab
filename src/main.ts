import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Ripple from "@/directives/ripple";

import "@/registerServiceWorker";

const app = createApp(App);

app.directive(Ripple.name, Ripple.directive);
app.use(store);
app.use(router);

router.isReady().then(() => {
    app.mount("#app");
});
