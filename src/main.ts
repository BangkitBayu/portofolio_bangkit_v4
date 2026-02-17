import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import Vue3Marquee from 'vue3-marquee'
import router from '@/route'

const app = createApp(App)
app.use(router)
app.mount('#app')
// app.use(Vue3Marquee)
