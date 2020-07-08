<template>
    <header class="header-title py-6">
        <img :src="$resizeImage(image, 1300, 250)" v-if="image" class="image-cover"/>
        <section class="header-title-opacity" v-if="image"></section>
        <l-wrapper :class="image ? 'color-white' : 'color-dark'" style="position: relative; z-index: 4">
            <h1 class="font-size-xxxl"><slot/></h1>
            <p v-if="description" class="mb-0">{{description}}</p>
        </l-wrapper>
    </header>
</template>

<script>
export default {
    props: {
        image: String,
        description: String
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'

    .header-title
        position: relative

        &-opacity
            background-color: map-get($colors, dark)
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: 3
            opacity: .6
    
</style>