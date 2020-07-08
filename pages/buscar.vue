<template>
    <l-content>
        <l-wrapper>
            <h1>Buscar productos</h1>
            <p class="font-size-m" v-show="$route.query.text">Resultados en: "{{$route.query.text}}"</p>
            <products :products="results" class="mt-6" :totalResults="totalResults" :loading="loading"/>
        </l-wrapper>
    </l-content>
</template>


<script>
import products from '@/components/contents/products';
export default {
    async asyncData({route, store}){
        const products = await store.dispatch('getAllProducts', route.query);
        return {
            totalResults: products.totalResults,
            resultsPerPage: products.resultsPerPage,
            results: products.results
        };
    },
    components: {
        products
    },
    data(){
        return{
            loading: false
        }
    },
    methods: {
        async searchProducts(){
            this.loading = true;
            const products = await this.$store.dispatch('getAllProducts', this.$route.query);
            this.totalResults = products.totalResults,
            this.resultsPerPage = products.resultsPerPage,
            this.results = products.results;
            this.loading = false;
        }
    },
    watch:{
        $route(){
            this.searchProducts();
        }
    }
}
</script>