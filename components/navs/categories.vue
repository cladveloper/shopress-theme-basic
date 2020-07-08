<template>
    <section class="nav-categories">
        <a href="" class="line-height-0 nav-categories-btn" @click.prevent="show = !show">
            <img src="@/assets/images/menu-outline.svg" height="24px"/>
            <span class="font-size-xs font-weight-bold ml-1 color-dark">CATEGORÍAS</span>
        </a>
        <nav class="nav-categories-options" v-show="show">
            <ul class="nav-categories-nav">
                <li v-for="(category,index) in categories" @click="show = !show" class="nav-categories-item" :key="index">
                    <n-link :to="`/categoria/${category.url}`" class="nav-categories-link flex-center">
                        <img :src="category.icon" v-if="category.icon" height="18px"/>
                        <img src="@/assets/images/menu-outline.svg" v-else height="18px"/>
                        <span class="ml-2">{{category.name}}</span>
                    </n-link>
                </li>
            </ul>
        </nav>

        <fixed-all opacity="0" v-show="show" @click="show = !show"/>
        
    </section>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            default: () => [],
        }
    },
    data(){
        return{
            show: false
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'
    
    .nav-categories
        position: relative

        &-btn
            border: 1px solid map-get($colors, grey)
            display: flex
            align-items: center
            padding: $gutter*.75 $gutter
            border-radius: $border-radius

            &:active
                background-color: map-get($colors, light)

        &-options
            background-color: white
            border: 1px solid map-get($colors, grey)
            top: 100%
            left: 0
            max-height: 280px
            width: 250px
            position: absolute
            border-radius: $border-radius
            overflow-y: auto
            padding: $gutter/2 0
            z-index: 99

        &-nav, &-item
            margin: 0

        &-link
            padding: $gutter/2 $gutter
            color: map-get($colors, dark)

            &:active
                background-color: map-get($colors, light)
</style>