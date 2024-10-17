<script setup>

    // const nombre = defineModel('nombre')
    // const apellido = defineModel('apellido')

    const [texto, modifiers] = defineModel({
        set(value){
            if(modifiers.mayus)
                return value.toUpperCase()
            else    
                return value
        }
    })
</script>
<template>

    <!-- <input v-model="nombre">
    <input v-model="apellido"> -->
    <input v-model="texto">
    

</template>