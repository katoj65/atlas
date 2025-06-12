import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/test',
    name:'test',
    component: ()=>import('../views/TestPage.vue')
  },
  {
    path:'/notification',
    name:'notification',
    component: ()=>import('../views/NotificationView.vue')
  },
  {
    path:'/operations',
    name:'operations',
    component: ()=>import('../views/OperationsView.vue')
  },
  {
    path:'/zones',
    name:'zones',
    component: ()=>import('../views/ZonesView.vue')
  },
  {
    path:'/training',
    name:'training',
    component: ()=>import('../views/TrainingView.vue')
  }






]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
