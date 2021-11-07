import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/app.css';

import Navbar from './components/UX/nav/Navbar.vue';

const app = createApp(App)

app.component("Navbar", Navbar);
app.use(router);

app.mount('#app')
