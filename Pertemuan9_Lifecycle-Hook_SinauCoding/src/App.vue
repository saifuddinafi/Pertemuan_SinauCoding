<template>
  <div id="app" class="bg-dark min-vh-100">
    <UserTable />
  </div>
</template>

<script>
import UserTable from './components/Users.vue'

export default {
  name: 'App',
  components: {
    UserTable
  }
}
</script>
