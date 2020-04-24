import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/Navbar.vue'
import Footer from '../views/Footer.vue'
import ChatApp from '../views/ChatApp.vue'
import Login from '../views/Login.vue'
import Gallery from '../views/Gallery.vue'
import Terapi from '../views/Terapi.vue'
import Register from '../views/Register.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar,  footer: Footer},
    meta: { 
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {default: Login},
  },
  {
    path: '/register',
    name: 'register',
    components: {default: Register},
    // meta: { 
    //   requiresAuth: false
    // }
  },
  {
    path: '/gallery',
    name: 'gallery',
    components: {default: Gallery,  footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/terapi',
    name: 'terapi',
    components: {default: Terapi,  footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/chat',
    name: 'chat',
    components: {default: ChatApp},
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})
export default router
