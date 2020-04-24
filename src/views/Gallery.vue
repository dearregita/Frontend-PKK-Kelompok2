<template>
<div>
<section class="page-title text-center" style="background-image:url(assets/images/bahagia.jpg;">
    <div class="container">
        <div class="title-text">
            <h1>Gallery</h1>
            <ul class="title-menu clearfix">
                <li>
                    <a href="/">home &nbsp;/</a>
                </li>
                <li>Gallery</li>
            </ul>
        </div>
    </div>
</section>
    <section class="gallery bg-gray" id="gallery">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center">
                        <h3>Kumpulan
                            <span>Kata - Kata Bijak </span>
                        </h3>
                        <!-- <p>Siswa dapat mengunjungi ruangan BK untuk berkonsultasi
                            <br>tanpa dipungut biaya...</p> -->
                    </div>
                </div>
                <div class="col-md-4 col-sm-6" v-for="g in picture" :key="g.id">
                    
                    <div class="gallery-item">
                        <img :src=g.picture class="img-responsive" alt="gallery-image">
                        <a data-fancybox="images" :href=g.picture></a>
                        <h3>{{g.judul}}</h3>
                        <p>{{g.deskripsi}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
         <section class="video-gallery">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center">
                        <h3>Video
                            <span>Motivasi</span>
                        </h3>
                        <p>Dengan adanya fitur ini, diharapkan dapat menyelesaikan
                            <br>permasalahaan yang ada.</p>
                    </div>
                </div>
                <div class="col-sm-6" v-for="v in video" :key="v.id">
                    <div class="video-gallery-item">
                        <div class="image-holder">
                            <img :src=v.video class="img-responsive" alt="video-gallery">
                            <a data-fancybox="images" :href=v.video>
                                <i class="fa fa-play"></i></a>
                        </div>
                        <h3>{{v.judul}}</h3>
                    </div>
                </div>
           
            </div>
        </div>
    </section>
</section>
</div>
</template>


<script>
module.exports = {
  data : function(){
    return {
      search: "",
      id: "",
      picture: "haiii",
      video: "",
      message: "",
      currentPage: 1,
      rows: 0,
      perPage: 10,
      key: "",
      conf: ""
    }
  },

  methods: {
    getGambar: function(){
        // let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
    //   this.$bvToast.show("loadingToast");
        this.axios.get("http://127.0.0.1:8000/api/picture/")
            .then(response => {
                // this.status = response.data.status;
                if (response.data.status == 1) {
                    this.picture = response.data.picture;
                    console.log(response.data.picture);
        
                    if (response.data.count == 0) {
                    this.status = 0;
            
                    }
                } else {
                this.$bvToast.hide("loadingToast");
                this.message = "Gagal menampilkan data picture."
                this.$bvToast.show("message");
                this.$router.push({name: "home"})
                    console.log("Data Tidak Ditemukan");
            
                }
                })
    },
        pagination : function(){
      if(this.search == ""){
        this.getGambar();
      } else {
        this.searching();
      }
},

getVideo: function(){
        //  let conf = { headers: { Authorization: "Bearer " + this.key } };
        // this.$bvToast.show("loadingToast");
    //    this.axios.get("/login/check", conf)
       this.axios.get("http://127.0.0.1:8000/api/video/")
            .then(response => {
        if(response.data.status == 1){
          this.$bvToast.hide("loadingToast");
          this.video = response.data.video;
        } else {
          this.$bvToast.hide("loadingToast");
          this.message = "Gagal menampilkan data user."
          this.$bvToast.show("message");
          this.$router.push({name: "home"})
        }
                })
    },
        pagination : function(){
      if(this.search == ""){
        this.getVideo();
        this.getGambar();
      } else {
        this.searching();
      }
    },
  },
       mounted(){
            this.key = localStorage.getItem("Authorization");
            this.getGambar();
            this.getVideo();


        }
}

</script>
