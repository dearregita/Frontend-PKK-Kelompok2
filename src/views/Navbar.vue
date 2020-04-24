<template>
  <div class="page-wrapper">

<!--Main Header-->
<nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
                     
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                 

                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                  </button>
                  
            </div>
   
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                        <li class="active">
                              <a href="/">Home</a>
                        </li>
                        <li>
                              <a href="#akun">Daftar</a>
                        </li>
                        <li>
                              <a href="/gallery">Gallery</a>
                        </li>
                        <li>
                              <a href="/terapi">Terapi</a>
                        </li>
                        <li>
                              <a href="#team">Team</a>
                        </li>
                        <li>
                              <a href="#appointment">Appointment</a>
                        </li>
                         <li>
                              <a href="/chat">Chat</a>
                        </li>
                        <li>
                              <a @click="logout"  class="btn btn-main btn-white" id="logout"> Logout </a>
                        </li>
                        <li >
                              <!-- <a class="nav-link dropdown-toggle"  v-for="h in user" :key="h.id">
                                    Hi, {{h.name}} 
                              </a> -->
                              <a>
                                    Hi, {{ logged_user.name }}
                              </a>
                        </li>
                  </ul>
            </div>
            
            <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
      
</nav>
<!--End Main Header -->
  </div>
  </template>

<script>
module.exports ={
      data : function(){
    return {
    name: 'navbar',
    id: "",

    key: "",
    message: "",
    user: [],
    logged_user: {}
      }
},
    computed : {
        isLoggedIn : function(){
            return this.$store.getters.isLoggedIn}
    },
    methods:{
    getUser: function(){
    let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
    this.$bvToast.show("loadingToast");
    this.axios.get("http://127.0.0.1:8000/api/admin")
            .then(response => {
              this.status = response.data.status;
              if (response.data.status == 1) {
                this.$bvToast.hide("loadingToast");
                this.user = response.data.user;
                
            //     console.log(response.data.count);
     
            //     if (response.data.count == 0) {
            //       this.status = 0;  
              } else {
            //     console.log("Data Tidak Ditemukan");
                 this.$bvToast.hide("loadingToast");
          this.message = "Gagal menampilkan data user."
          this.$bvToast.show("message");
          this.$router.push({name: "login"})
              }
            })
let form = new FormData();
            form.append("email", email);
            form.append("password", password);

            axios.post("http://127.0.0.1:8000/api/login/check")
            .then(response => {
              localStorage.setItem("token", response.data.token);
              this.$router.push('/');
            })
            .catch(error => {
              console.log(error);
              
            })
},
    
        pagination : function(){
      if(this.search == ""){
        this.getUser();
      } else {
        this.searching();
      }
    },


      logout:function(){
          let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
          let form = new FormData();
          this.axios.post('/logout', form, conf).then(response => {
            if (response.data.logged === false || response.data.status === 0) {
                this.$store.commit('logout')
                localStorage.removeItem("Authorization")
                this.$router.push({name: 'login'})
            }
          }).catch(error => {

        });
      },
  },
   mounted(){
            this.key = localStorage.getItem("Authorization");
            if(localStorage.getItem("logged_user")){
            //    this.logged_user = JSON.parse(localStorage.getItem("logged_user"));
            } else{
                  
            }
        }
}

</script>

  <style>
  strong {
      padding-left: 50px;
      padding-top: 100px;

  }
  .logos {
      padding-left: -50px;
            padding-top: 4px;

  }
  span {
      padding-left: 5px;  
  }
  /* #logout {
        padding-right: 200px;
        margin-top: 1%;
  } */
  </style>
  