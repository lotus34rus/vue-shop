<template>
  <div id="app">
    <Navbar />

    <router-view  />
  </div>
</template>


<script>
import Navbar from "@/components/app/Navbar";

export default {
  name: "App",
  data() {
    return {
      user: {}
    }
  },
  components: {
    Navbar
  },
  
  async mounted() {
    const token = localStorage.getItem('user-token') || '';
    if(this.$store.getters.isAuthenticated){
      this.user = await this.$store.dispatch('getUserInfo', token);    
    }
  },
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
