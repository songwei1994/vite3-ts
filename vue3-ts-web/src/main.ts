import { createApp } from 'vue'
import './tailwind.css'
import './style.css'
import App from './App.vue'
import pinia from './store/index.ts'
import router from './router.ts'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { configKeepScroll } from './hooks/useKeepScroll.ts'
// import {createPinia} from 'pinia'
// const pinia = createPinia()

const app = createApp(App)
configKeepScroll('#app-main-scroller')
// app.use(ElementPlus)
app.use(router)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
