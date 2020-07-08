<template>
    <header class="l-title area ai-c">
        <h1 class="mb-0"><slot/></h1>
        <n-link :to="btnLink" class="btn btn-primary mb-0 ml-auto">{{btnText}}</n-link>
    </header>
</template>

<script>
export default {
    props: {
        btnText: {
            type: String,
            default: 'Ver más'
        },
        btnLink: {
            type: String,
            default: '/'
        },

    }
}
</script>

<style lang="sass" scoped>
    .l-title
        
</style>