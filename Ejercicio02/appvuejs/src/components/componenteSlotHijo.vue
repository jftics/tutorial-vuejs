<script setup>

</script>
<template>

    <button class="btn">
        <slot></slot>
    </button>
    
</template>
<style>
    .btn{
        background-color: cyan;
        border: 2px solid gray;
        border-radius: 10px;
        padding: 10px;
        min-width: 150px;
    }

</style>