<template>
    <section class="area g-1 j-c ai-s">
        <c-category
            v-for="(category,i) in categories"
            :key="i"
            :name='category.name'
            :icon='category.icon ? category.icon: "" '
            :link="category.url"
        />
    </section>
</template>

<script>
import cCategory from '@/components/cards/category';
export default {
    components: {
        cCategory
    },
    props: {
        categories: {
            type: Array,
            default: () => []
        }
    }
}
</script>