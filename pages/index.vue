<template>
    <section>
        <cover/>
        <l-wrapper>
            <l-content>
                <l-title btn-text="Ver todo" btn-link="/" class="mb-4">Donde la Rosita &#127817</l-title>
                <categories class="mb-6" :categories="featuredCategories"/>
                <products :products="featuredProducts.results">
                    <h2 class="mb-4">Productos destacados</h2>
                </products>
            </l-content>
        </l-wrapper>
    </section>
</template>

<script>
import cover from '@/components/contents/cover';
import categories from '@/components/contents/categories';
import products from '@/components/contents/products';
import featured from '@/components/contents/featured';
export default {
    async asyncData({store}){
        const featuredProducts = await store.dispatch('getAllProducts', {featured: "yes", project: "name,imageCover,price,url", limit: 12});
        return {featuredProducts};
    },

    components:{
        cover,
        categories,
        featured,
        products
    },

    created(){
        this.featuredCategories = this.$store.state.categories.filter(category => category.featured);
    },

    data(){
        return {
            featuredCategories: [],
        }
    }
}
</script>