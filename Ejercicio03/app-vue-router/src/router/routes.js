import { createRouter, createWebHistory } from "vue-router";
import homeComponent from "@/components/home.component.vue";
import loginComponent from "@/components/login.component.vue";
import usersComponent from "@/components/users.component.vue";
import userComponent from "@/components/user.component.vue";
import notfoundComponent from "@/components/notfound.component.vue";
import userProfileComponent from "@/components/user-profile.component.vue";
import userPostsComponent from "@/components/user-posts.component.vue";

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
            path:'/userabc/:iduser',
            name: 'user',
            component: userComponent,
            children:[
                {
                    // /user/:iduser/profile
                    path:'profile',
                    component: userProfileComponent,
                    name: 'user-profile'
                }
                ,
                {
                    // /user/:iduser/posts
                    path:'posts',
                    component: userPostsComponent,
                    name: 'user-posts'
                }
            ]
        }
    ]
})
export default router