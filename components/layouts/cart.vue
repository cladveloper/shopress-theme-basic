<template>
    <section class="l-cart">
        <header class="flex-center pt-4 pl-3 pr-3 pb-2 mb-0">
            <h5 class="font-size-xl">Mi carro de compra &#128526</h5>
            <a href="" @click.prevent="$emit('click')">
                <img src="@/assets/images/close-outline.svg" height="32px"/>
            </a>
        </header>
        <section class="l-cart-products">
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
            <c-cart-product/>
        </section>
        <footer class="l-cart-details">
            <section class="l-cart-price flex-center p-3">
                <span class="font-weight-bold color-dark-50">Total</span>
                <span class="ml-auto font-weight-bold font-size-xl">$999.999</span>
            </section>
            <a href="" class="l-cart-btn ml-auto flex-center j-c">
                <span class="mr-1">Ir al pago</span>
                <img src="@/assets/images/arrow-forward-outline.svg" height="22px"/>
            </a>
        </footer>
    </section>
</template>

<script>
import cCartProduct from '@/components/cards/cart-product';
export default {
    components: {
        cCartProduct
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'
    .l-cart
        width: 100%
        height: 100%
        display: flex
        flex-direction: column

        &-btn
            padding: $gutter $gutter*2
            background-color: map-get($colors, secondary)
            color: white
            font-weight: bold
            text-align: center

        &-products
            flex: 1
            overflow-y: auto

        &-details
            
        &-price
            padding-bottom: $gutter

</style>