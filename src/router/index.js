import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/Navbar.vue'
import Footer from '../views/Footer.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar,  footer: Footer},
  },
  {
    path: '/chat',
    name: 'chat',
    components: {default: Chat},

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
