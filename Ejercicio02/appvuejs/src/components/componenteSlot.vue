<script setup>
    import { ref } from 'vue';
    import componenteSlotHijo from './componenteSlotHijo.vue';
    import componente1 from './componente1.vue';
    import componenteSlotLayout from './componenteSlotLayout.vue';
    const msg = ref('Click aqui!!!')
</script>
<template>

    <!-- <componenteSlotHijo>
        {{ msg }}
    </componenteSlotHijo> -->

    <componenteSlotLayout>
        <template v-slot:header>
            <h1>Mi Aplicación</h1>
        </template>
        <template #anuncio="{product, price}">
            <b>Producto: {{ product }}</b>
            <br>
            <b>Precio: {{ price }}</b>
            <br>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </template>
        <template v-slot:default>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </template>

        <template #footer>
            <h4>Pie de pagina</h4>
        </template>
    </componenteSlotLayout>
</template>