<script setup>
    import { onMounted, onBeforeMount, onUpdated, ref } from 'vue';
    import componente1 from './componente1.vue';
    const count = ref(0)
    const el = ref()
    const show = ref(true)
    onBeforeMount(()=>{
        console.log("Antes de montar en el doom", el.value)
    })
    onMounted(()=>{
        console.log("despues de montar en el doom", el.value)
    })
    onUpdated(()=>{
        console.log("Despues de actualizar en Doom", el.value)
    })
</script>

<template>

    <h2>Hooks en el ciclo de vida de la APP</h2>
    <div ref="el">
        {{count}}
    </div>
    <button @click="count++">Incrementar</button>
    <br><br>
    <button @click="show=!show">Mostrar / ocultar componente</button>
    <div v-if="show" style="border: 1px solid green;">
        <componente1></componente1>
    </div>
    

</template>