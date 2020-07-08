<template>
    <article class="box-4">
        <section class="c-featured border-radius">
            <img :src="$resizeImage(image, 350, 200)" width="100%" class="border-radius image-cover"/>
        </section>
    </article>
</template>

<script>
export default {
    props: {
        image: {
            type: String
        }
    }
}
</script>

<style lang="sass" scoped>
    .c-featured
        height: 200px
        overflow: hidden
        position: relative
</style>