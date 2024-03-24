import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontend/HomeView.vue'),
      },
      {
        path: 'brand',
        component: () => import('../views/frontend/AboutView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/frontend/ProductsList.vue'),
      },
      {
        path: 'product/:id',
        name: 'product-statement',
        component: () => import('../views/frontend/ProductStatement.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/frontend/CartView.vue'),
      },
      {
        path: 'userinfo',
        component: () => import('../views/frontend/UserCart.vue'),
      },
      {
        path: 'checkout/:id',
        name: 'order-detail',
        component: () => import('../views/frontend/OrderComfirm.vue'),
      },
      {
        path: 'complete',
        name: 'pay-complete',
        component: () => import('../views/frontend/OrderComplete.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/ErrorPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
