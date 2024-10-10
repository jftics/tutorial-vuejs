<script setup>
    import componenteHijo from './componenteHijo.vue';
    import componenteHermano from './componenteHermano.vue';
    import {ref} from 'vue'

    //Objeto para enviar al hijo
    const textoAEnviar = ref('hola desde padre!!!')

    //respuesta del hijo
    let childMsg = ref('')
</script>

<template>

    
    <div class="padre">
        <H2>Componente Padre</H2>
        <componenteHijo :msg="textoAEnviar" v-on:response="(msg)=> childMsg=msg"></componenteHijo>

        <p>Mensaje desde el hijo:</p> {{ childMsg }}

        <componenteHermano :msg="childMsg"></componenteHermano>
    </div>

</template>
<style>
    .padre{
        width: 600px;
        height: 400px;
        background-color: green;
        color: white;
    }
</style>