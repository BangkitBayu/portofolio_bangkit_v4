import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import Vue3Marquee from 'vue3-marquee'

const app = createApp(App)
app.mount('#app')
app.use(Vue3Marquee)
