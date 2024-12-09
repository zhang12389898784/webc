import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import Video from '../views/video/index.vue'
import Login from '../views/login/index.vue'
import Center from '../views/center/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    },
  ]
})

export default router
