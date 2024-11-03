<script setup>
    import { ref, computed } from 'vue';
    import componenteSlot from './componenteSlot.vue';
    import componenteTeleport from './componenteTeleport.vue';
    import notFound from './notFound.vue';

    const routes = {
        '/': componenteSlot,
        '/modal': componenteTeleport
    }

    const currentPath = ref(window.location.hash)
    window.addEventListener('hashchange',()=>{
        currentPath.value = window.location.hash
    })
    //www.dominio.com/#/uno
    const currentView = computed(()=>{
        return routes[currentPath.value.slice(1) || '/'] || notFound
    })



</script>

<template>
    <h2>Routing</h2>
    <br>
    <a href="#/">Inicio</a> |
    <a href="#/modal">Ejemplo Modal</a> |
    <a href="#/noExiste">Prueba 404</a> 
    <br>
    <component :is="currentView"></component>

</template>