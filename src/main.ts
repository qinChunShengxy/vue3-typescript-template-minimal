import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import router from '@/router/index'
import App from './App.vue'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).use(createPinia()).use(ElementPlus)
app.mount('#app')
