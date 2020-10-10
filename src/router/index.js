import { createRouter, createWebHashHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // vue3新增defineAsyncComponent API 用来定义异步组件
  {
    path: '/test',
    name: 'Test',
    component: defineAsyncComponent(() => import('../views/Test.vue')),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
