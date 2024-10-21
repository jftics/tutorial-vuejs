<script setup>
    import { computed, reactive, ref } from 'vue';

    const cursos = reactive({
        frontend:[
            //{materia:'angular'}
        ]
    })
    const nuevaMateria =  ref('')
    function adicionarMateria(){
        cursos.frontend.push({materia:nuevaMateria.value})
    }

    const cursoDisponible = computed(()=>{
        console.log('Ejecutando computed...')
        return cursos.frontend.length > 0 ? "Disponible":"No disponible"
    })
    function cursoEsDisponible(){
        console.log('Ejecutando function...')
        return cursos.frontend.length > 0 ? "Disponible":"No disponible"
    }

    function ejecutar(){
        console.log('Result computed:', cursoDisponible)
        console.log('Result function:', cursoEsDisponible())
    }

</script>

<template>
    <h2>Propiedades Calculadas o Computed Properties</h2>

    <h3>Curso de frontend <span style="background-color: yellow;">{{ cursoDisponible }}</span></h3>
    <h3>Curso de frontend <span style="background-color: yellow;">{{ cursoEsDisponible() }}</span></h3>
    <ul>
        <li v-for="item in cursos.frontend" :key="item.materia">{{ item.materia }}</li>
    </ul>
    <input v-model="nuevaMateria">
    <button @click="adicionarMateria()">Adicionar Materia</button>
    <br>
    <button @click="ejecutar()">Ejecutar</button>
    

</template>