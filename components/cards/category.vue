<template>
    <article class="box-2">
        <n-link :to="`categoria/${link}`" class="c-category pt-1 py-4">
            <section class="c-category-icon mb-2">
                <img v-if="icon.length > 0" :src="$scaleImage(icon,28)" width="28px"/>
                <img v-else src="@/assets/images/menu-outline.svg" width="28px"/>
            </section>
            <h2 class="font-size-xxs font-weight-bold m-0">{{name}}</h2>
        </n-link>
    </article>
</template>

<script>
export default {
    props: {
        icon: String,
        name: String,
        link: {
            type: String,
            default: '/'
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'

    .c-category
        text-align: center
        background-color: map-get($colors, grey)
        display: block
        color: $default-color
        border-radius: 100px
        transition: .5s margin-top

        &:hover
            margin-top: -$gutter

</style>