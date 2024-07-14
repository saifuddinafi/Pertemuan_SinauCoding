<script>
import { ref, onMounted } from 'vue'
import { useProductStore } from './stores/productStore'
import ChartView from './components/ChartView.vue'
import LogView from './components/LogView.vue'

export default {
  components: { ChartView, LogView },
  setup() {
    const activeTab = ref('chart')
    const productStore = useProductStore()

    onMounted(async () => {
      await productStore.fetchProducts()
    })

    return { activeTab }
  }
}
</script>

<template>
  <div id="app" class="container mt-4">
    <nav class="nav nav-tabs mb-4">
      <button class="nav-link" :class="{ active: activeTab === 'chart' }" @click="activeTab = 'chart'">Chart</button>
      <button class="nav-link" :class="{ active: activeTab === 'log' }" @click="activeTab = 'log'">Log</button>
    </nav>
    <ChartView v-if="activeTab === 'chart'" />
    <LogView v-else />
  </div>
</template>

