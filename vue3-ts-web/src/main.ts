import { createApp } from 'vue'
import './tailwind.css'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './store/index'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
