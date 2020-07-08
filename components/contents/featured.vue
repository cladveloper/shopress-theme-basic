<template>
    <section class="area g-1">
        <c-featured image="http://localhost:1111/example1.jpg"/>
        <c-featured image="http://localhost:1111/example2.jpg"/>
        <c-featured image="http://localhost:1111/example3.jpg"/>
    </section>
</template>

<script>
import cFeatured from '@/components/cards/featured';
export default {
    components: {
        cFeatured
    }
}
</script>