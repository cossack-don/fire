import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/principles',
      name: 'principles',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Principles.vue')
    },
    {
      path: '/api/:path*',
      redirect: () => {
        // Check if the environment is development
        // if (process.env.NODE_ENV === 'development') {
        //   // Redirect to the development server
        //   return 'http://127.0.0.1:8000/api/:path*';
        // } else {
          // Redirect to the production API
          return '/api/';
        // }
      },
    },
  ]
})

export default router
