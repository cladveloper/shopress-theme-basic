<template>
    <section class="layout">
        
        <section class="layout-content">
            <l-header>
                <l-logo/>
                <nav-categories class="ml-2" :categories="$store.state.categories"/>
                <nav-search class="ml-auto mr-2"/>
                <nav-cart @click="cart = !cart"/>
            </l-header>
            <nuxt/>
            <l-footer/>
        </section>

        <section class="layout-cart background-color-light" :class="{active: cart}">
            <l-cart @click="cart = !cart"/>
        </section>

    </section>
</template>

<script>
export default {
    data(){
        return{
            cart: false,
        }
    }
}
</script>

<style lang="sass" scoped>
    .layout
        display: flex
        width: 100%
        height: 100vh
        overflow: hidden

        &-content &-cart
            flex: 1

        &-content
            width: 100%
            overflow-y: auto

        &-cart
            width: 100%
            max-width: 320px
            transition: .5s all
            margin-right: -320px

            &.active
                margin-right: 0px
                

</style>