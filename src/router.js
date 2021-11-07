import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import VuePage from './components/vue/Vue.vue';

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
        }
    ]
});

export default router;