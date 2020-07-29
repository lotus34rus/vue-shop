<template>
  <div id="app">
    <Navbar :user="user.user" 
            @userLogout = 'userLogout'
    />

    <router-view @userLogin="userLogin" />
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
  methods: {
    async userLogin(){
      const token = localStorage.getItem('user-token') || '';
      if(this.$store.getters.isAuthenticated){
        this.user = await this.$store.dispatch('getUserInfo', token);    
      }
    },

    userLogout(){
      this.user = {}
    }
  },
  
  async mounted() {
   this.userLogin()
  },
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
