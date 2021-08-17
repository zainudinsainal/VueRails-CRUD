import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/products/ProductList.vue')
  },
  {
    path: '/products/create',
    name: 'Product Create',
    component: () => import('../views/products/ProductCreate.vue')
  },
  {
    path: '/employees',
    name: 'Employees',
    component: () => import('../components/employees/index.vue')
  },
  {
    path: '/employees/new',
    name: 'New Employee',
    component: () => import('../components/employees/new.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
