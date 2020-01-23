import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Navbar from '../views/Navbar.vue'
import Footer from '../views/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: {default: About, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: {default: Navbar, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }  
  },
  {
    path: '/footer',
    name: 'footer',
    component: {default: Footer, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }  
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
export default router
