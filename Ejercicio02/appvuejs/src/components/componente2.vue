<script setup>
import {ref} from 'vue'

const estilo = ref('titulo') 
const disabled = ref(false)
function getTitle(){
    return "titulo del boton"
}
function miFuncion(event){
    console.log(event.target)
    alert('Funcionó')
}


</script>

<template>

<h1>Enlaces de Atributos</h1>

<div :class="estilo">
    Texto de prueba
</div>
<button v-bind:disabled="disabled" :title="getTitle()" >Boton</button>

<h1>Manejadores de eventos</h1>

<button @click="miFuncion($event)">Mi boton</button>

<input @keyup.enter="miFuncion($event)"/>

</template>

<style>

.titulo{
    color:green
}

</style>