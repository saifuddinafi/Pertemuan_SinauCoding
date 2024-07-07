import { createRouter, createWebHistory } from 'vue-router'
import IngredientList from '../components/IngredientList.vue'

const routes = [
  { path: '/', component: IngredientList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router