<script setup>
    import { vHighlight3 } from './directivas';
    const vHighlight = {
        mounted: (el)=>{
            el.style.background = "yellow"
        }
    }

    const vFocus={
        mounted: (el)=>{
            el.focus()
        }
    }

</script>

<template>

    <p v-highlight>Texto importante de prueba</p>
    <p v-highlight2>Texto importante de prueba</p>
    <p v-highlight3>Texto importante de prueba</p>
    <p v-highlight4="{color:'red'}">Texto importante de prueba</p>
    
    <input>
    <input v-focus>
    <input>

</template>