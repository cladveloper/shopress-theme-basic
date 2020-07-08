<template>
    <article class="box-4">
        <n-link :to="`producto/${link}`" class="c-product background-color-light border-radius mb-4">
            <section class="c-product-image border-radius-top">
                <img :src="$resizeImage(image, 225, 155)" v-if="image" class="border-radius image-cover"/>
                <img src="image-default.png" v-else class="border-radius image-cover"/>
            </section>

            <section class="c-product-description p-3">
                <span class="font-weight-bold font-size-m mb-2 display-block">$12.000</span>
                <h3 class="font-size-xs">{{name}}</h3>
            </section>

        </n-link>
    </article>
</template>

<script>
export default {
    props: {
        name: String,
        image: String,
        price: Number,
        link: {
            type: String,
            default: '',
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'

    .c-product
        height: 300px
        display: block
        color: map-get($colors, dark)

        &-image
            position: relative
            height: 155px

        &-description
            
</style>