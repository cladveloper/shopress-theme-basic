<template>
    <header class="header">
        <l-wrapper style="height: 100%">
            <section class="area ai-c" style="height: 100%">
                <slot/>
            </section>
        </l-wrapper>
    </header>
</template>

<style scoped lang="sass">
    @import '@/assets/styles/config.sass'
    .header
        display: block
        width: 100%
        height: 80px
        background-color: white
        border-bottom: 1px solid map-get($colors, grey)
</style>