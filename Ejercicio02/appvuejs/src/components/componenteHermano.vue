<script setup>

    //Para recibir los mensajes del padre
    const props = defineProps({
        msg:String
    })
    

</script>

<template>

    <div class="hermano">
        <H2>Componente Hermano</H2>
        <p> Mensaje desde el hermano: </p>  
        {{ msg }}
        
    </div>

</template>
<style>
    .hermano{
        width: 300px;
        height: 150px;
        background-color: yellow;
        color: black;
    }
</style>