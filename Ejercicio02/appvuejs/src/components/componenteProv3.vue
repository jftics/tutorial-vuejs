<script setup>
    import { inject } from 'vue';

    const msg = inject('msg','Sin dato')
</script>
<template>

    <div class="nivel3">
        {{ msg }}
    </div>

</template>
<style>
    .nivel3{
        background-color: yellow;
        width: 150px;
        height: 150px;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);  
    }
</style>