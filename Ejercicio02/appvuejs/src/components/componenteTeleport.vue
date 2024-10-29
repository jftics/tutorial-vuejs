<script setup>
    import { ref } from 'vue';
    import componeteModal from './componeteModal.vue';

    const showModal = ref(false)

    function ejecutarFuncion(evento){
        console.log("....",evento)
        showModal.value = false
    }
</script>

<template>

    <h2>Teleport</h2>

    <div>
        <h3>Ejemplo de Modal</h3>
        <button @click="showModal=true">Mostrar Modal</button>
        <Teleport to="body">
            <componeteModal :show="showModal"  @close="showModal=false" @ok="ejecutarFuncion('ok')"   @no="ejecutarFuncion('no')"   @yes="ejecutarFuncion('yes')">
                <template #header>
                    <h2>Mi Modal</h2>
                </template>          
                <template #body>
                    <p>¿Alguna pregunta?</p>
                </template>  
                <!-- <template #close>
                    Cancelar
                </template>
                <template #ok>
                    Aceptar
                </template> -->

                <template #no>
                    No
                </template>
                <template #si>
                    Si
                </template>
                 
            </componeteModal>
        </Teleport>
        
    </div>
    
</template>