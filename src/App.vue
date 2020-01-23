<template>
  <div id="app">
    <router-view name="header" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './views/Navbar'
import Home from './views/Home'
// import Footer from './views/Footer'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
