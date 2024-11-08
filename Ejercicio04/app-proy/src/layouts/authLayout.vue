<script setup>
    import { RouterView } from 'vue-router';
    import headerComponent from '@/components/headerComponent.vue';
    import navbarComponent from '@/components/navbarComponent.vue';
</script>

<template>

    <headerComponent></headerComponent>
    <navbarComponent></navbarComponent>
    <main>
        <RouterView></RouterView>
    </main>
    
</template>