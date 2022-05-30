<template>
    <div>
        search
        <TypeNav></TypeNav>
    </div>
    
</template>

<script>
import TypeNav from '@/components/TypeNav/index.vue';
import { shallowReactive } from '@vue/reactivity';
export default {
    name: "Search",
    components: { TypeNav },
    
}
</script>

<style>

</style>