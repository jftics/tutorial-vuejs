<script setup>

    import {ref} from 'vue'

    const txt = ref('')

    const showText = ref(false)

    let id = 0
    const lista = ref([
        {id: id++, lenguaje:'javascript'},
        {id: id++, lenguaje:'python'},
        {id: id++, lenguaje:'c++'},
    ])

    function removerItem(item){
        lista.value = lista.value.filter((t)=> t!==item)
    }

    const newItem = ref('')
    function addItem(){
        lista.value.push({id:id++, lenguaje:newItem.value})
        newItem.value = ''
    }
</script>
<template>
    <h1>Directivas</h1>
    <h2>V-model</h2>

    <input v-model="txt">
    {{ txt }}

    <h2>V-if</h2>

    <form @submit.prevent="addItem">
        <input v-model="newItem">
        <button>Add</button>
    </form>

    <div v-if="showText" >Texto por true</div>
    <div v-else>Texto por False</div>

    <h2>V-for</h2>

    <ul>
        <li v-for="item in lista" :key="item.id">
            {{ item.lenguaje }}
            <button @click="removerItem(item)">X</button>
        </li>
    </ul>
</template>