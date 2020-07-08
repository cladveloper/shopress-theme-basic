<template>
    <section class="input-search background-color-light">
        <img src="@/assets/images/search.svg" height="24px" class="mb-0"/>
        <form @submit.prevent="search"  @change="search" style="flex: 1 !important;">
            <input type="text" v-model="text" class="input-search-input" placeholder="Buscar por palabras claves" ref="inputSearch"/>
        </form>
    </section>
</template>

<script>
export default {
    created(){
        if(this.$route.query.text) this.text = this.$route.query.text;
    },
    data(){
        return{
            text: '',
        }
    },
    methods: {
        search(){
            this.$router.push({path: '/buscar', query: {text: this.text}})
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/styles/config.sass'
    
    .input-search
        align-items: center
        display: flex
        padding-left: $gutter*.75
        min-width: 350px
        border-radius: $border-radius

        &-input
            padding: $gutter*.75
            margin-left: $gutter/2
            background-color: transparent
            border: 0px
            font-family: $font
            color: $default-color
            width: 98%
            font-size: $s

            &:focus
                outline: none

</style>