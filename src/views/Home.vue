<template>
  <div class="home">
    <div class="parallax-container">
      <div class="parallax" ref="parallax">
        <img src="https://anscommerce.s3.ap-south-1.amazonaws.com/live/image/catalog/brandstore/johnson/Information/service-center-5.jpg">
      </div>
    </div>
 </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  },

  mounted() {
    var elems = this.$refs.parallax;
    var instances = M.Parallax.init(elems, 0);
  },
}
</script>


<style lang="css">
    .parallax-container {
      height: 300px;
      /* position: static; */
      width: 100%;  
    }
</style>