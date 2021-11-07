import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import VuePage from './components/vue/Vue.vue';
import Inertia from './components/inertia/Inertia.vue';
import Tailwind from './components/tailwind/Tailwind.vue';
import Axios from './components/axios/Axios.vue';
import Laravel from './components/laravel/Laravel.vue';
import MySql from './components/sql/MySql.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
             path: "/",
             component: Home
        },
        {
            path: "/vue",
            component: VuePage
        },
        {
            path: "/inertia",
            component: Inertia
        },
        {
            path: "/tailwind",
            component: Tailwind
        },
        {
            path: "/axios",
            component: Axios
        },
        {
            path: "/laravel",
            component: Laravel
        },
        {
            path: "/mysql",
            component: MySql
        }
    ]
});

export default router;