<template>
    <section class="cover">
        <img :src="$resizeImage('http://localhost:1111/cover.jpg', 1900, 400)" class="image-cover"/>
        <section class="cover-opacity"></section>
        <l-content>
            <l-wrapper>
                <section class="cover-content color-white line-height" style="max-width: 600px">
                    <span class="font-size-xxxl font-weight-bold">Envío gratis en todo Santiago</span>
                    <p class="mt-2 mb-6 font-size-m">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, rem facere illo earum dolore porro.</p>
                    <a href="" class="btn btn-primary mb-0 btn-big">Ver más</a>
                </section>
            </l-wrapper>
        </l-content>
    </section>
</template>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'
    
    .cover
        width: 100%
        background-color: map-get($colors, dark)
        position: relative
        z-index: 1

        &-opacity, &-content
            height: 100%
            width: 100%
            top: 0
            left: 0
            position: relative

        &-opacity
            z-index: 2
            position: absolute
            background-color: map-get($colors, dark)
            opacity: .5

        &-content
            z-index: 3
            display: flex
            flex-direction: column
            padding: $gutter*5 0
            align-items: flex-start
        

</style>