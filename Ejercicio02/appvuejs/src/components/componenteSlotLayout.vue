<script setup>

    import { ref } from 'vue';

    const producto = ref('Reloj')
    const precio = ref(100)

</script>

<template>

    <header>
        <slot name="header"></slot>        
    </header>
    <div class="anuncio" v-if="$slots.anuncio">
        <slot name="anuncio" :product="producto" :price="precio">
            Colocar anuncios aqui
        </slot>
    </div>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>

</template>

<style>

    header{
        background-color: cyan;
        min-height: 150px;
        width: 100%;
        text-align: center;
        padding: 10px; 
    }

    footer{
        background-color: gray;
        color: white;
        min-height: 50px;
        width: 100%;
        text-align: center;
        padding: 10px;
    }
    main{
        width: 100%; 
    }
    .anuncio{
        background-color: yellow;
        color: black;
        min-height: 150px;
        width: 100%;
        padding: 10px;
    }

</style>