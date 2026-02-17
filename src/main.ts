import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import Vue3Marquee from 'vue3-marquee'
import router from '@/route'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const app = createApp(App)

// using vue-router plugin
app.use(router)

//register scroll triger plugin from gsap
gsap.registerPlugin(ScrollTrigger)

app.mount('#app')
// app.use(Vue3Marquee)
