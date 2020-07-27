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
  components: {
    Navbar
  }
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
