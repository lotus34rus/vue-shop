<template>
  <div class="about">
    <h1>Welcome to the watch catalog</h1>

    <!-- <img v-for='watch of watches' :src="watch.img" alt="" :key="watch.id"> -->

   <div class="row">
    <div class="col s12 m4"
     v-for='watch of watches'
      :key="watch.id"
    >
      <div class="card">
        <div class="card-image">
          <img :src="watch.img">
        </div>
        <div class="card-content">
          <span class="card-title">{{watch.title}}</span>
          <p>{{watch.desc}}</p>
        </div>
        <div class="card-action">
          <a href="#">Detail</a>
        </div>
      </div>
    </div>
  </div>



  </div>
</template>



<script>
export default {
  name: "Shop",
  data(){
    return { 
        watches: []
    }
  },


  mounted() {
    this.watches = this.$store.getters.getAllWathes;
  },
}
</script>

