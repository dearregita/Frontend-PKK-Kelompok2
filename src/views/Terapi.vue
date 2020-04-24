<template>
<div>
<section class="page-title text-center" style="background-image:url(assets/images/bahagia.jpg);">
    <div class="container">
        <div class="title-text">
            <h1>Terapi</h1>
            <ul class="title-menu clearfix">
                <li>
                    <a href="/">home &nbsp;/</a>
                </li>
                <li>Terapi</li>
            </ul>
        </div>
    </div>
</section>
       <section class="testimonial-section" style="background: url(assets/images/testimonials/1.jpg);">
    <div class="container">
    <div class="section-title text-center">
                <h3>Quote
                    <!-- <span>Diri</span> -->
                </h3>
    </div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel" >
        <!-- Indicators -->
        <ol class="carousel-indicators" >
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

         <div class="testimonial-carousel" v-for="q in quote" :key="q.id">
            <!--Slide Item-->
            <div class="slide-item" >
                <div class="inner-box text-center">
                        <p>{{q.quote}}</p>
                    
                <!-- <h6>Bertrand Russell</h6> -->
                    <!-- <p v-for="quote in api_pkk" :key="quote.id">{{quote.quote}}</p> -->
                </div>
            </div>
        </div>
      
            </div>
         </div>
    </section>
</div>
</template>

<script>
module.exports = {
  data : function(){
    return {
      search: "",
      id: "",
      quote: "haiii",
      conf: "",
      message: "",
      currentPage: 1,
      key: "",
    }
  },

  methods: {
      
    getQuotes: function(){
    let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
    let offset = (this.currentPage - 1) * this.perPage;
    this.$bvToast.show("loadingToast");
    this.axios.get("/login/check")
    this.axios.get("http://127.0.0.1:8000/api/quote/")
            .then(response => {
              this.status = response.data.status;
              if (response.data.status == 1) {
                this.$bvToast.hide("loadingToast");
                this.quote = response.data.quote;
                console.log(response.data.count);
     
                if (response.data.count == 0) {
                  this.status = 0;
          
                }
              } else {
                // console.log("Data Tidak Ditemukan");
                 this.$bvToast.hide("loadingToast");
          this.message = "Gagal menampilkan data user."
          this.$bvToast.show("message");
        //   this.$router.push({name: "login"})
              }
            })
},
    
        pagination : function(){
      if(this.search == ""){
        this.getQuotes();
      } else {
        this.searching();
      }
    },


  },

       mounted(){
            this.key = localStorage.getItem("Authorization");
            this.getQuotes();
            this.quote += " Dear";
        }
}
</script>


