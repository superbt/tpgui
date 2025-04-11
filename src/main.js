//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'

import router  from "@/router/index.js";

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const  app = createApp(App3)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

