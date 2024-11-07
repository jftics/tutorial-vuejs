<script setup>
    import { RouterView } from 'vue-router';
    import headerComponent from '@/components/headerComponent.vue';
    import footerComponent from '@/components/footerComponent.vue';
    import navbarComponent from '@/components/navbarComponent.vue';
</script>

<template>

    <headerComponent></headerComponent>
    <navbarComponent></navbarComponent>
    <main>
        <RouterView></RouterView>
    </main>
    <footerComponent></footerComponent>


</template>