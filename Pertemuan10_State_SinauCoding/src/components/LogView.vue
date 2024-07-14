<template>
    <div class="log-view">
      <h2 class="mb-4">This is the Log Chart page</h2>
      <p class="mb-4">Total items: {{ productStore.cartCount }}</p>
      <div v-if="productStore.cartCount === 0" class="alert alert-info">
        There is nothing in your cart
      </div>
      <div v-else class="list-group">
        <div v-for="item in productStore.cart" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ item.title }}</span>
          <button @click="removeFromCart(item.id)" class="btn btn-danger btn-sm">Remove</button>
        </div>
      </div>
    </div>
</template>
  
<script>
  import { useProductStore } from '../stores/productStore'
  
  export default {
    setup() {
      const productStore = useProductStore()
  
      const removeFromCart = (productId) => {
        productStore.removeFromCart(productId)
      }
  
      return { productStore, removeFromCart }
    }
  }
</script>