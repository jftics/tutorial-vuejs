<script setup>
    import { reactive } from 'vue';
    import { RouterLink, useRouter } from 'vue-router';

    const usuarios = reactive([
        {iduser: 1, name: 'juan'},
        {iduser: 2, name: 'pedro'},
        {iduser: 3, name: 'raul'}
    ])

    const router = useRouter()
    function verDetalle(iduser, name){
        router.push({name:'user', params:{iduser: iduser, name : name}})
    }
</script>
<template>

    <h2>Lista de usuario</h2>
    <ul>
        <li v-for="usuario in usuarios" :key="usuario.iduser">
            {{ usuario.name }} <RouterLink :to="{name:'user', params:{iduser: usuario.iduser, name : usuario.name}}"> Ver Detalle</RouterLink>
            |
            <button type="button" @click="verDetalle(usuario.iduser, usuario.name)">Ver detalle</button>

        </li>
    </ul>

</template>