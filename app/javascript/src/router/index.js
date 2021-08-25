import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Helper from '../pages/Helper.vue';
import NProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: Helper
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../pages/products/ProductIndex.vue')
  },
  {
    path: '/products/create',
    name: 'Product Create',
    component: () => import('../pages/products/ProductNew.vue')
  },
  {
    path: '/products/edit/:id',
    name: 'ProductEdit',
    component: () => import('../pages/products/ProductEdit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

export default router
