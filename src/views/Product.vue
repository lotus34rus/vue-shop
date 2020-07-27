<template>
        <div class="row product">
            <div class="col m12">
                <h1>{{watch.title}}</h1>

                <img :src='"../"+watch.img' :alt="watch.title">
                <p>{{watch.desc}}</p>


                <p>{{watch.price}} RUB</p>
            </div>
        </div>  
</template>

<script>


export default {
    name: 'Product',
    data(){
        return {
            watch: []
        }
    },

    mounted() {   
        const id = this.$route.params.id;           
        this.watch = this.$store.getters.getWatchById(id)[0];
    },
}
</script>