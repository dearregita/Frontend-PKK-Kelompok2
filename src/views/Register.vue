<template>
  <div class="main-panel">
    <div class="content-wrapper d-flex align-items-center auth" id="register">
      <div class="row w-100">
        <div class="col-lg-4 mx-auto">
          <div class="auth-form-light text-left p-5">
            <div class="navbar-brand brand-logo">
              <img src="assets/images/konseler.png" style="width:50px; height:50px; margin-left:-5px; margin-top:-20px"/>
            </div>
            <h4><b>Selamat datang!</b></h4>
            <h6 class="font-weight-light" >Daftar Segera</h6>
            <form class="pt-3" v-on:submit.prevent="Register">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend bg-transparent">
                    <span class="input-group-text bg-transparent border-right-0">
                      <i class="mdi mdi-account-outline text-primary"></i>
                    </span>
                  </div>
                  <input
                    type="text" class="form-control form-control-lg border-left-0" id="name" name="name" v-model="name" placeholder="Name" required/>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend bg-transparent">
                    <span class="input-group-text bg-transparent border-right-0">
                      <i class="mdi mdi-account-outline text-primary"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control form-control-lg border-left-0" id="phone" name="phone" v-model="phone" placeholder="Phone" required/>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend bg-transparent">
                    <span class="input-group-text bg-transparent border-right-0">
                      <i class="mdi mdi-message-outline text-primary"></i>
                    </span>
                  </div>
                  <input type="email" class="form-control form-control-lg border-left-0" id="email" name="email" v-model="email" placeholder="E-Mail" required/>
                </div>
              </div><div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend bg-transparent">
                    <span class="input-group-text bg-transparent border-right-0">
                      <i class="mdi mdi-message-outline text-primary"></i>
                    </span>
                  </div>
                  <input type="profile_picture" class="form-control form-control-lg border-left-0" id="profile_picture" name="profile_picture" v-model="profile_picture" placeholder="Profile Picture" required/>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend bg-transparent">
                    <span class="input-group-text bg-transparent border-right-0">
                      <i class="mdi mdi-lock-outline text-primary"></i>
                    </span>
                  </div>
                  <input type="password" class="form-control form-control-lg border-left-0" name="password" id="password" v-model="password" placeholder="New Password" required/>
                </div>
              </div>
              
              <div class="my-3">
                <input type="submit" name="submit"  class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  value="REGISTER"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
  export default {
    data() {
      return {
        name: "",
        phone: "",
        email: "",
                password: "",
        profile_picture: "",
      };
    },
    methods: {
      Register: function() {
        let name = this.name;
        let phone = this.phone;
        let email = this.email;
        let password = this.password;
        let profile_picture = this.profile_picture;
        this.$store.dispatch('register', {
            name,
            phone,
            email,
            password,
            profile_picture,
          })
          .then(() => this.$router.push('/login'))
          .catch(err => console.log(err));
      }
    }
  };
</script>

<style>
auth .auth-form-light {
    background: #ffffff;
}
.text-left {
    text-align: left !important;
}
.p-5 {
    padding: 3rem !important;
    margin-top: 10px;
}
h6, .h6 {
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin-top: 10px;
}
*, *::before, *::after {
    box-sizing: border-box;
}
body #register{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    margin-left: 500px;
    margin-top: 5%; 
}
*, *::before, *::after {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: border-box;
}
</style>