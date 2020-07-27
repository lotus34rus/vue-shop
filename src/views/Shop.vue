<template>
  <div class="about">
    <h1>This is an shop page</h1>

    <img v-for='watch of watches' :src="watch.img" alt="" :key="watch.id">

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

