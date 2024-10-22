<script setup>
    import { onMounted, useTemplateRef } from 'vue';

    const input = useTemplateRef('mi_input')
    console.log(input)
    
    
    onMounted(()=>{
        input.value.focus()
        input.value.id = "id_input"
        input.value.style = "border: 2px solid green"
        console.log(input.value)

    })

</script>

<template>

    <h2>Referencia a plantillas o Template Ref</h2>

    <input ref="mi_input">
    <input :ref="(el)=>{el.style = 'border: 2px solid cyan'}">

</template>