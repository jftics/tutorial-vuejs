import { createRouter, createWebHistory } from "vue-router";
import homeComponent from "@/components/home.component.vue";
import loginComponent from "@/components/login.component.vue";
import usersComponent from "@/components/users.component.vue";
import userComponent from "@/components/user.component.vue";
import notfoundComponent from "@/components/notfound.component.vue";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/:pathMach(.*)*',
            component:notfoundComponent
        },
        {
            path:'/',
            component:homeComponent
        },
        {
            path:'/login',
            component:loginComponent
        }
        ,
        {
            path:'/users',
            component: usersComponent
        }
        ,
        {
            path:'/user/:iduser/persona/:name',
            name: 'user',
            component: userComponent
        }
    ]
})
export default router