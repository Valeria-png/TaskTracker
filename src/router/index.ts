import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import HomeView from '@/views/HomeView.vue'
import { useUserStore } from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registro',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Register
    },
    {
      path: '/home',
      name: 'home',
      component:HomeView,
      beforeEnter: (to, from, next) => {
        if (useUserStore().isLogged) {
          next()  
        } else {
          next('/')
        }
      }
    }
  ]
})

export default router
