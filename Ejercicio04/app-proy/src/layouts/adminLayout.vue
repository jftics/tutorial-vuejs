<script setup>
    import { RouterView, RouterLink } from 'vue-router';
    import headerComponent from '@/components/headerComponent.vue';
    import footerComponent from '@/components/footerComponent.vue';
    import navbarComponent from '@/components/navbarComponent.vue';
</script>

<template>

    <headerComponent></headerComponent>
    <navbarComponent></navbarComponent>
    <main>
        <BContainer fluid>
            <BRow>
                <BCol cols="3">
                    <BListGroup class="menu">
                        <BListGroupItem button><RouterLink to="/admin/users">Usuarios</RouterLink></BListGroupItem>
                        <BListGroupItem button><RouterLink to="/admin/admin">Administración</RouterLink></BListGroupItem>
                        <BListGroupItem button><RouterLink to="/admin/report">Reportes</RouterLink></BListGroupItem>
                    </BListGroup>
                </BCol>
                <BCol cols="9">
                    <RouterView></RouterView>
                </BCol>
            </BRow>
        </BContainer>
        
    </main>
    <footerComponent></footerComponent>


</template>

<style>
    .menu a{
        text-decoration: none;
    }
</style>