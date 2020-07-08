<template>
    <section>
        <slot/>
        <p v-if="loading" class="font-weight-bold">Cargando...</p>
        <p v-else-if="products.length > 0">Cerca de <b>{{products.length}}</b> producto/s encontrado/s</p>
        <p v-else>No se ha encontrado ningún producto</p>
        
        <section class="area ai-c j-c" v-if="loading">
            <img src="@/assets/images/loading.svg" height="125px"/>
        </section>
        
        <section class="area g-1" v-else-if="products.length > 0">
            <c-product
                v-for="(product,i) in products" :key="i"
                :image="product.imageCover"
                :name="product.name"
                :price="product.price"
                :link="product.url"
            />
        </section>

        <section v-else>
        </section>
    </section>
</template>

<script>
import cProduct from '@/components/cards/product';
export default {
    props: {
        products: {
            type: Array,
            default: () => [],
        },
        totalResults: {
            type: [Number,String]
        },
        loading: Boolean
    },
    components: {
        cProduct
    }
}
</script>