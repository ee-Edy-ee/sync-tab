import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import general from "@/layouts/General.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        meta: { layout: general }
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: { layout: general }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
