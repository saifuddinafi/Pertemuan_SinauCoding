import { defineStore } from 'pinia'

export const useIngredientStore = defineStore('ingredient', {
  state: () => ({
    ingredients: [],
    customer: '',
  }),
  actions: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient)
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1)
    },
    setCustomer(name) {
      this.customer = name
    },
  },
})