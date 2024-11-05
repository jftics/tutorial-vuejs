<script setup>

    import {useRoute} from 'vue-router'

    const route = useRoute()


</script>

<template>
    <h2>Perfil del usuario</h2>
    <p>id user: {{ route.params.iduser }}</p>
</template>