<template>
  <div class="container-fluid bg-dark text-light py-4">
    <div class="table-responsive">
      <table class="table table-dark table-hover">
        <TableHeader :headers="headers" />
        <tbody>
          <TableRow 
            v-for="user in users" 
            :key="user.id" 
            :user="user"
            @show-data="showData"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'

export default {
  components: {
    TableHeader,
    TableRow
  },
  setup() {
    const headers = ref([])
    const users = ref([])

    onMounted(() => {
      fetchHeaders()
      fetchUsers()
    })

    const fetchHeaders = async () => {
      try {
        const response = await fetch('/Header.json')
        headers.value = await response.json()
      } catch (error) {
        console.error('Error fetching headers:', error)
      }
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch('/User.json')
        users.value = await response.json()
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    const showData = (user) => {
      alert(`\nNama: ${user.nama}, position: ${user.position}, email: ${user.email}`)
    }

    return {
      headers,
      users,
      showData
    }
  }
}
</script>

<style scoped>
.table {
  margin-bottom: 0;
}
</style>