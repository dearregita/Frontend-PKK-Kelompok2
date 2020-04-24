<template>
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper" id="login">
      <div class="main-panel">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="navbar-brand brand-logo">
                  <img src="assets/images/konseler.png" style="width:50px; height:50px; margin-left:-5px; margin-top:-10px">
                </div>
                <h4>Selamat datang!</h4>
                <h6 class="font-weight-light">Login Konsline</h6>
                 <form v-on:submit.prevent="Login" class="pt-3" method="post">
                <div class="form-group">    
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input v-model="email" type="email" class="form-control form-control-lg border-left-0" id="email" name="email" placeholder="Email" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-lock-outline text-primary"></i>
                      </span>
                    </div>
                    <input v-model="password" type="password" class="form-control form-control-lg border-left-0" name="password" id="password" placeholder="Password" required>                        
                  </div>
                </div>
                <div class="my-3">
                  <input type="submit" name="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" value="MASUK">
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
window.axios = require('axios');
import { log } from 'util';

export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
        Login: function(){
            let email = this.email; //let itu variabel baru
            let password = this.password;
            // this.$store.dispatch('login', { email, password })
            // .then(() => this.$router.push('/'))
            // .catch(err => console.log(err))

            let form = new FormData();
            
            form.append("email", this.email);
            form.append("password", this.password);
            

            axios.post("http://127.0.0.1:8000/api/login", form)
            .then(response => {
              let logged = response.data.logged;
              if(logged){
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("logged_user", JSON.stringify(response.data.user));
                this.$router.push('/');
              }else{
                alert(response.data.message)
              }
            })
            .catch(error => {
              console.log(error);
              
            })
        }
    }
}
</script>

<style>
form {
    display: block;
    margin-top: 0em;
}
.auth .auth-form-light select {
  color: #c9c8c8;
}
.auth .auth-form-transparent select {
  outline-color: #d9dbdc;
}
.text-left {
    text-align: center !important;
}
.p-5 {
    padding: 3rem !important;
}
 .row #login {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
} 
.mx-auto {
    margin-left: auto !important;
}
.mr-auto, .mx-auto {
    margin-right: auto !important;
}
.col-lg-4 {
  -webkit-box-flex: 0;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
div {
    display: block;
}
body #login {
    margin-left: 500px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
     margin-top: 10%; 
  } 
a, div, h1, h2, h3, h4, h5, p, span {
    text-shadow: none;
     font-weight: 500;
}
*, *::before, *::after {
    box-sizing: border-box;
}  
.input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
}
/* input[type=submit].btn-block {
      position: relative;
    width: 100%;
} */
</style>
