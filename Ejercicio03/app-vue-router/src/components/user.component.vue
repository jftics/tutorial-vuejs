<script setup>
    import { onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()
    console.log(route.params)

    onMounted(()=>{
        console.log("obteniendo datos del usuario:" ,  route.params.iduser)
    })

    watch(()=>route.params.iduser, (newid, oldid)=>{
        console.log("obteniendo datos del usuario con watch:" ,  route.params.iduser)
    })
</script>


<template>

    <h2>Detale del usuario</h2>

    <br>
    <p>id user: {{ route.params.iduser }}</p>
    <p>Nombre: {{ route.params.name }}</p>

    <RouterLink :to="{name:'user', params:{iduser:1,name:'prueba'}}">ir a usuario 1</RouterLink>
</template>