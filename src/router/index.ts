/* eslint-disable @typescript-eslint/no-unused-vars */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import general from "@/layouts/General.vue";
import { nextTick } from "vue";

const DEFAULT_TITLE = process.env.VUE_APP_NAME;
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        meta: { layout: general, title: "Home" }
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
        meta: { layout: general, title: "Login" }
    },
    {
        path: "/about",
        name: "about",
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: { layout: general, title: "About" }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    nextTick(() => {
        document.title = DEFAULT_TITLE + " - " + to.meta.title || DEFAULT_TITLE;
    });

    next();
});

export default router;
