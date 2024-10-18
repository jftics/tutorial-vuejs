<script setup>
    import { ref, reactive, onUnmounted } from 'vue'

    const count = ref(0)
    const state = reactive({count:0})
    console.log(count)
    console.log(state)

    onUnmounted(()=>{
        console.log("Componente desmontado")
    })
</script>

<template>
    <h1>Representacion Declarativa</h1>

    <p>{{ count }}</p>

    <button @click="count++">count</button>
    <p>{{ state.count }}</p>
    <button @click="state.count++">count</button>

</template>