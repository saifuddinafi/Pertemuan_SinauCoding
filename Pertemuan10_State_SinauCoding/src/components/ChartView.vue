<template>
  <div class="chart-view">
    <h2 class="mb-4">This is the Chart View page</h2>
    <p class="mb-2">Items for sale</p>
    <p class="mb-4">Total items: {{ productStore.cartCount }}</p>
    <div class="list-group">
      <div v-for="product in productStore.products" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span>{{ product.title }}</span>
        <button @click="addToCart(product)" class="btn btn-primary btn-sm">Add</button>
      </div>
    </div>
  </div>
</template>
  
<script>
  import { useProductStore } from '../stores/productStore'
  
  export default {
    setup() {
      const productStore = useProductStore()
  
      const addToCart = (product) => {
        productStore.addToCart(product)
      }
  
      return { productStore, addToCart }
    }
  }
</script>