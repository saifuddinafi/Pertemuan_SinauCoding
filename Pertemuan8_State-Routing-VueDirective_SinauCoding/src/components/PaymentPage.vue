<template>
    <div class="payment-container">
      <h1>Payment</h1>
      <p>Total Pembayaran yang harus dibayarkan oleh {{ customer }} dari {{ totalAmount }} items sebesar:</p>
      <p>Rp. {{ totalPrice.toFixed(2) }}</p>
      <button @click="goBack">Back</button>
    </div>
</template>
  
<script setup>
  import { useRouter } from 'vue-router';
  import { useIngredientStore } from '../stores/ingredientStore';
  
  const store = useIngredientStore();
  const router = useRouter();
  
  const customer = store.customer;
  const totalAmount = store.totalAmount;
  const totalPrice = store.totalPrice;
  
  console.log('Data from store:', { customer, totalAmount, totalPrice });
  
  function goBack() {
    router.push({ name: 'IngredientList' });
  }
</script>
  
<style>
  .payment-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 700px;
    color: #fff;
    background-color: #1c1c1c;
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 10px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
  