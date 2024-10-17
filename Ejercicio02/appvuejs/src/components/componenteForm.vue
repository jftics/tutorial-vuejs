<script setup>
    import {ref} from 'vue'
    import componenteFormHijo from './componenteFormHijo.vue';
    // const nombre  = ref('')
    // const apellido  = ref('')
    
    const input  = ref('')

    const checkbox = ref('')
    const checkboxm = ref([])
    const radio = ref('')
    const select = ref('')
    const selectm = ref([])
</script>

<template>

    <h2>Formulario</h2>

    <strong>Control input</strong>
    <br>
    <!-- <componenteFormHijo v-model:nombre="nombre" v-model:apellido="apellido"></componenteFormHijo>
    {{ nombre }}- {{ apellido }} -->
    <componenteFormHijo v-model.mayus="input"></componenteFormHijo>
    {{ input }}

    <hr>
    <strong>Control checkbox</strong>
    <br>
    <input type="checkbox" v-model="checkbox">
    <br>
    <p>el valor de checkbox: {{ checkbox }}</p>
    <br>


    <hr>
    <strong>Control Multiple checkbox</strong>
    <br>
    <input type="checkbox" v-model="checkboxm" value="uno">uno
    <input type="checkbox" v-model="checkboxm" value="dos">dos
    <input type="checkbox" v-model="checkboxm" value="tres">tres
    <input type="checkbox" v-model="checkboxm" value="cuatro">cuatro
    <br>
    <p>el valor de checkbox: {{ checkboxm }}</p>
    <br>

    <hr>
    <strong>Control radio</strong>
    <br>
    <input type="radio" v-model="radio" value="si"> si
    <input type="radio" v-model="radio" value="no"> no
    <br>
    <p>el valor de radio: {{ radio }}</p>
    <br>


    <hr>
    <strong>Control select</strong>
    <br>
    <select v-model="select">
        <option disabled>-Seleccione item-</option>
        <option>uno</option>
        <option>dos</option>
        <option>tres</option>
    </select>
    
    <br>
    <p>el valor de select: {{ select }}</p>
    <br>


    <hr>
    <strong>Control multi select</strong>
    <br>
    <select v-model="selectm" multiple>
        <option disabled>-Seleccione item-</option>
        <option>uno</option>
        <option>dos</option>
        <option>tres</option>
    </select>
    
    <br>
    <p>el valor de selectm: {{ selectm }}</p>
    <br>
</template>