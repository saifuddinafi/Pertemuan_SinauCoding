import { createRouter, createWebHistory } from 'vue-router';
import IngredientList from '../components/IngredientList.vue';
import PaymentPage from '../components/PaymentPage.vue'; 

const routes = [
  {
    path: '/',
    name: 'IngredientList',
    component: IngredientList
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
