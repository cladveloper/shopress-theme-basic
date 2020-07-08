<template>
    <a href="" @click.prevent="$emit('click')" class="fixed-all" :style="{opacity}">
    </a>
</template>

<script>
export default {
    props: {
        opacity: {
            type: String,
            default: '.6'
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'

    .fixed-all
        position: fixed
        width: 100%
        height: 100%
        background-color: map-get($colors, dark)
        z-index: 98
        top: 0
        left: 0
        cursor: default

</style>