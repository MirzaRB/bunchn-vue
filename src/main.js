import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import axios from 'axios';

// Setup Axios base url
var apiUrl = '/api';
export const HTTP = axios.create({
    baseURL: apiUrl
});
//Access axios from any Vue template as this.$http
Vue.prototype.$http = HTTP;

const app = createApp(App)

app.use(router)

app.mount('#app')
