<script setup>
        import { RouterLink } from 'vue-router';
</script>
<template>

        <div class="navbar">
                <nav class="bar">
                        <RouterLink to="/"> Inicio</RouterLink>
                        <RouterLink to="/contact"> Contactos</RouterLink>
                        <RouterLink to="/resource"> Recursos</RouterLink>
                        <RouterLink to="/login"> Login</RouterLink>
                </nav>
        </div>
        
</template>
<style>
        .navbar{
                width: 100%;
                background-color: rgb(22, 22, 22);
                text-align: end;
                display: block !important;
        }

        .bar a{
                text-decoration: none ;
                color: white;
                padding: 3px;
        }
        
</style>