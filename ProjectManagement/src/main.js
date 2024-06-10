import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/app.css'
import router from './router'
import store from './store';

store.dispatch('checkAuth');

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
