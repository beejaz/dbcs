import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import * as VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const routes = [
    { path: '/', component: Home, meta: { transition: 'fade' }, },
    { path: '/about', component: About, meta: { transition: 'fade' }, },
    { path: '/contact', component: Contact, meta: { transition: 'fade' }, },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
