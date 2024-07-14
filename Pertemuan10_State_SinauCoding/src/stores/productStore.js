import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    cart: []
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch('/products.json')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        this.products = await response.json()
      } catch (error) {
        console.error('Error fetching products:', error)
        // Handle error (e.g., show error message to user)
      }
    },
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.cart.splice(index, 1)
      }
    }
  },
  getters: {
    cartCount: (state) => state.cart.length
  }
})