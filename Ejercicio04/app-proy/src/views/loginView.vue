<script setup>
    import { reactive, ref } from 'vue';
    import { loginService } from '@/services/authService';
    import { sesionSetService } from '@/services/sesionService';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const loading = ref(false)
    const formLogin=reactive({
        username:null,
        password: null
    })

    const login = async (event)=>{
        event.preventDefault()
        loading.value=true
        try{
            const data = await loginService(formLogin.username, formLogin.password)
            console.log('...', data)
            if(data.success){
                // guardar el token
                sesionSetService('auth-token', data.accessToken)
                // redirigir a una pagina interna
                router.push({path:'/admin/users'})
            }
            else{
                alert(data.error)
            }
        }
        catch(err){
            console.log(err)
            alert("Error al enviar los datos del usuario")
        }
        finally{
            loading.value=false
        }

        
    }
</script>
<template>
    <br>
    <div class="login_contenedor">
        <div class="login">
            <BCard>
                <BForm @submit="login">
                    <BFormGroup
                    id="input-group-1"
                    label="Usuario:"
                    label-for="input-1"
                    description="Introduzca nombre de usuario."
                    class="txt"
                    >
                    <BFormInput
                        id="input-1"
                        type="text"
                        placeholder="Introduzca nombre de usuario"
                        required
                        v-model="formLogin.username"
                    />
                    </BFormGroup>
                    <BFormGroup
                    id="input-group-2"
                    label="Contraseña:"
                    label-for="input-2"
                    description="Introduzca contraseña."
                    class="txt"
                    >
                    <BFormInput
                        id="input-2"
                        type="password"
                        placeholder="Introduzca contraseña"
                        required
                        v-model="formLogin.password"
                    />
                    </BFormGroup>
                    <br>
                    <BButton type="submit" variant="primary" :disabled="loading">Iniciar Sesión</BButton>
                </BForm>
            </BCard>
        </div>
    </div>
    
    <br>
</template>
<style>
    .login_contenedor{
        width: 100%;   
        text-align: center;
    }
    .login{
        width: 400px;
        margin: auto;
        padding-top: 20px;
    }
    .txt{
        text-align: left;
    }
</style>