import { createRouter, createWebHistory } from 'vue-router'
import mainLayout from '@/layouts/mainLayout.vue'
import homeView from '@/views/homeView.vue'
import contactsView from '@/views/contactsView.vue'
import resourcesView from '@/views/resourcesView.vue'

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
  ],
})

export default router
