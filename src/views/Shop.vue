<template>
  <div class="container">
    <h1>Welcome to the watch catalog</h1>
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
          <a @click.prevent="$router.push('/product/'+watch.id)">Detail</a>
        </div>
      </div>
    </div>
  </div>



  </div>
</template>



<script>
import ProductsService from '@/services/ProductsService'

export default {
  name: "Shop",
  data(){
    return { 
        watches: []
    }
  },


  
  async mounted() {
    // this.watches = this.$store.getters.getAllWathes;
    const response = await ProductsService.fetchProducts()
    console.log(response);
    
    this.watches = response.data
  },
}
</script>

