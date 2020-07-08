<template>
    <article class="c-cart-product mb-2 px-3">
        <img :src="$resizeImage('http://localhost:1111/example1.jpg', 75,75)" class="border-radius mr-2"/>
        <section>
            <header style="display: flex; align-items: center" class="mb-1">
                <span class="font-size-xxs mr-auto font-weight-bold mr-auto">{{$cutText('Hamburguesas muy rica de pollos y queso con mucho queso!', 30)}}</span>
                <a href="">
                    <img src="@/assets/images/close-outline.svg" height="24px"/>
                </a>
            </header>
            <footer style="display: flex; align-items: center">
                <span class="font-weight-bold font-size-xs color-dark-50 mr-auto">$12.000</span>
                <a href="">
                    <img src="@/assets/images/minus-outline.svg" height="15px"/>
                </a>
                <input type="number" class="input-qty" placeholder="1" min="1" max="32"/>
                <a href="">
                    <img src="@/assets/images/plus-outline.svg" height="15px"/>
                </a>
            </footer>
        </section>
    </article>
</template>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'
    .c-cart-product
        display: flex
        align-items: center

    .input-qty
        width: 50px
        padding: $gutter/4 $gutter/2
        font-family: $font
        color: $default-color
        font-weight: bold
        border-radius: $border-radius
        border: 1px solid map-get($colors, grey)
        font-size: $xxs
        text-align: center
        &:focus
            outline: none

</style>