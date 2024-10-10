<script setup>

    import {ref} from 'vue'

    //Para recibir los mensajes del padre
    const props = defineProps({
        msg:String
    })

    //Pare enviar datos al padre
    const emit = defineEmits(['response'])
    //emit('response','respuesta desde el hijo')

    const txtEnviar = ref('')
    function enviarPadre(){
        emit('response',txtEnviar.value)
    }

</script>

<template>

    <div class="hijo">
        <H2>Componente Hijo</H2>
        <p> Mensaje desde el padre: </p>  {{ msg }}

        <input v-model="txtEnviar" @keyup="enviarPadre">
    </div>

</template>
<style>
    .hijo{
        width: 300px;
        height: 150px;
        background-color: cyan;
        color: black;
    }
</style>