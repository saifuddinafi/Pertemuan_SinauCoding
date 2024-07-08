<template>
    <div class="ingredient-list">
      <h1>List Ingredient</h1>
      <div class="form">
        <label for="customer">Customer</label>
        <input id="customer" v-model="customer" type="text" />
        <div class="input-row">
          <div class="input-group">
            <label for="ingredient">Ingredient</label>
            <input id="ingredient" v-model="ingredient" type="text" />
          </div>
          <div class="input-group">
            <label for="amount">Amount</label>
            <input id="amount" v-model.number="amount" type="number" />
          </div>
          <div class="input-group">
            <label for="price">Price</label>
            <input id="price" v-model.number="price" type="number" />
          </div>
          <button @click="addIngredient">Submit</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Ingredient</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in ingredients" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.ingredient }}</td>
            <td>Rp. {{ item.price.toFixed(2) }}</td>
            <td>{{ item.amount }}</td>
            <td>Rp. {{ (item.price * item.amount).toFixed(2) }}</td>
            <td><button @click="removeIngredient(index)">Delete</button></td>
          </tr>
          <tr v-if="ingredients.length === 0">
            <td colspan="6">Data empty</td>
          </tr>
          <tr>
            <td colspan="3">Total</td>
            <td>{{ totalAmount }}</td>
            <td>Rp. {{ totalPrice.toFixed(2) }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <p>Total Data: {{ ingredients.length }}</p>
      <div class="print-button">
        <button @click="printInvoice">Cetak Tagihan</button>
      </div>
    </div>
</template>
  
<script setup>
  import { ref, computed } from 'vue'
  import { useIngredientStore } from '../stores/ingredientStore'
  import { useRouter } from 'vue-router';
  import '../style.css'
  
  const store = useIngredientStore()
  
  const customer = ref('')
  const ingredient = ref('')
  const amount = ref(0)
  const price = ref(0)
  
  const ingredients = computed(() => store.ingredients)
  const totalAmount = computed(() => ingredients.value.reduce((sum, item) => sum + item.amount, 0))
  const totalPrice = computed(() => ingredients.value.reduce((sum, item) => sum + item.price * item.amount, 0))
  
  const router = useRouter();

  function addIngredient() {
    if (ingredient.value && amount.value && price.value) {
      store.addIngredient({
        ingredient: ingredient.value,
        amount: amount.value,
        price: price.value,
      })
      ingredient.value = ''
      amount.value = 0
      price.value = 0
    }
  }
  
  function removeIngredient(index) {
    store.removeIngredient(index)
  }
  
  function printInvoice() {
  if (!customer.value) {
    alert('Please field in customer name');
    return;
  }
  store.setCustomer(customer.value);
  store.setTotalAmount(totalAmount.value);
  store.setTotalPrice(totalPrice.value);

  console.log('Payment:', {
    customer: customer.value,
    totalAmount: totalAmount.value,
    totalPrice: totalPrice.value,
  });

  router.push({ name: 'Payment' });
  
}
</script>
  