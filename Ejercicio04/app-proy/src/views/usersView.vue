<script setup>

    import { userListService } from '@/services/userService';
    import { onMounted } from 'vue';

    import { ref } from 'vue';
    const loading = ref(false)
    const lista = ref()

    onMounted(async ()=>{
        loading.value = true
        try{
            const res = await userListService()
            console.log(res)
            if(res.success){
                lista.value = res.data
            }
            else{
                if(res.data == 'expired'){
                    alert('El token ha expirado, vuelva a iniciar sesion')
                }
            }
        }
        catch(err){
            console.log(err)
        }
        finally{
            loading.value = false
        }
        

    })

</script>
<template>

    <h2>Usuarios</h2>
    <ul>
        <li v-for="item in lista" :key="item.id_user">
            {{ item.username }}
        </li>
    </ul>
</template>