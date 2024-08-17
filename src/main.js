import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useAuthStore } from './stores/auth';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

// Importation des styles


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast, {
    position: POSITION.TOP_RIGHT,
    theme: 'bubble'
});

app.mount("#app");
