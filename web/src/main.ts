import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import {Request} from "@/http";
import VueAxios from "vue-axios";
const app = createApp(App)

app.use(ElementPlus);
app.use(store)
app.use(router)
app.use(VueAxios, Request.init())
app.mount('#app')
