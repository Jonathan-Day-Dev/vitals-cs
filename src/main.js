import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
             path: "/",
             component: Home
        }
    ]
})

app.use(router);

app.mount('#app')
