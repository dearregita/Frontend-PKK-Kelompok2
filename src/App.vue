<template>
  <div id="app">
    <!-- <router-view name="sidebar" /> -->
    <div class="main-content">
      <router-view name="header" />
      <!-- <div class="scroller"> -->
        <router-view />
      <router-view name="chat" />
    </div>
          <router-view name="footer" />
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',

   data : function(){
    return {
      status_login: ''
    }
  }
}
</script>

