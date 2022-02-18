import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {path: '/',name: 'Home', component: ()=> import('@/views/home.vue')},
  {path: '/vuex',name: 'Vuex', component: ()=> import('@/views/vuex.vue')},
  {path: '/axios',name: 'Axios', component: ()=> import('@/views/axios.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router