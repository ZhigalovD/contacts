import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit'
import Create from "@/views/Create";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
