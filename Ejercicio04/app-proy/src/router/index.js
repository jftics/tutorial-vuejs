import { createRouter, createWebHistory } from 'vue-router'
import mainLayout from '@/layouts/mainLayout.vue'
import homeView from '@/views/homeView.vue'
import contactsView from '@/views/contactsView.vue'
import resourcesView from '@/views/resourcesView.vue'

import authLayout from '@/layouts/authLayout.vue'
import loginView from '@/views/loginView.vue'

import adminLayout from '@/layouts/adminLayout.vue'
import usersView from '@/views/usersView.vue'
import reportesView from '@/views/reportesView.vue'
import adminView from '@/views/adminView.vue'

import { sesionGetService } from '@/services/sesionService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component:mainLayout,
      children:[
        {
          path:'',
          component:homeView
        },
        {
          path:'contact',
          component:contactsView
        },
        {
          path:'resource',
          component:resourcesView
        }
      ]
    }
    ,
    {
      path:'/login',
      component:authLayout,
      children:[
        {
          path:'',
          component:loginView
        }
      ]
    }
    ,
    {
      path:'/admin',
      component: adminLayout,
      beforeEnter: (to, from)=>{
        if(sesionGetService('auth-token')){
          return true
        }
        else{
          return false
        }

      },
      children:[
        {
          path:'admin',
          component:adminView
        },
        {
          path:'users',
          component:usersView,
          // beforeEnter: (to, from)=>{
          //   if(sesionGetService('auth-token')){
          //     return true
          //   }
          //   else{
          //     return false
          //   }

          // }
        },
        {
          path:'report',
          component:reportesView
        }
      ]
    }
  ],
})

export default router
