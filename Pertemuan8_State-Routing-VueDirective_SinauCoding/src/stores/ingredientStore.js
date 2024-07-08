import { defineStore } from 'pinia';

export const useIngredientStore = defineStore('ingredientStore', {
  state: () => ({
    ingredients: [],
    customer: '',
    totalAmount: 0,
    totalPrice: 0
  }),
  actions: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    setCustomer(name) {
      this.customer = name;
    },
    setTotalAmount(amount) {
      this.totalAmount = amount;
    },
    setTotalPrice(price) {
      this.totalPrice = price;
    }
  }
});
