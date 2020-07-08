<template>
    <section>
        <header-title 
            :image="category.image"
            :description="category.description"
        >

            {{category.name}}

        </header-title>

        <l-wrapper>
            <l-content>
                <products :products="products">
                    <h2 class="mb-4">Productos en {{category.name}}</h2>
                </products>
            </l-content>
        </l-wrapper>


    </section>
</template>

<script>
import products from '@/components/contents/products';
export default {
    async asyncData({store, params}){
        const category = await store.dispatch('getAllCategories', {url: params.url, project: 'name,image,description'});
        const products = await store.dispatch('getAllProducts', {categoriesIds: category.results[0]._id})
        return {category: category.results[0], products: products.results}
    },

    components: {
        products
    }
}
</script>

