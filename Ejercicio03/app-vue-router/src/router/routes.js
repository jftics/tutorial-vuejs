import { createRouter, createWebHistory } from "vue-router";
import homeComponent from "@/components/home.component.vue";
import loginComponent from "@/components/login.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:homeComponent
        },
        {
            path:'/login',
            component:loginComponent
        }
    ]
})
export default router