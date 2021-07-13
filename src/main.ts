import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

axios.defaults.baseURL = 'http://localhost:3000';

createApp(App).use(store).use(router).mount("#app");
