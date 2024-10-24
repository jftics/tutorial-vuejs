<script setup>
    import componenteProv2 from './componenteProv2.vue';

    import { provide, ref } from 'vue';

    const mensaje = ref('Mensaje desde el padre')

    provide('msg', mensaje)

</script>
<template>

    <div class="nivel1">
        <input v-model="mensaje">{{ mensaje }}
        <componenteProv2></componenteProv2>
    </div>

</template>
<style>
    .nivel1{
        background-color: aqua;
        width: 400px;
        height: 400px;
        position: relative;
    }
</style>