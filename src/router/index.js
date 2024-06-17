import { createRouter, createWebHistory } from 'vue-router';
import ShopView from '../views/ShopView.vue';
import { IStaticMethods } from "preline/preline";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShopView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/ProductsView.vue'),
    }
  ]
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      // Verifica que Preline UI esté cargado antes de llamar a autoInit()
      if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }
});

export default router;
