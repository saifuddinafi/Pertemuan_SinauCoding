<template>
    <tr>
      <td>{{ user.id }}</td>
      <td>{{ user.nama }}</td>
      <td>{{ user.position }}</td>
      <td>{{ user.no_telp }}</td>
      <td>{{ user.email }}</td>
      <td>
        <button @click="emitShowData" class="btn btn-outline-primary btn-sm">Show Data</button>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    setup(props, { emit }) {
      const emitShowData = () => {
        emit('show-data', props.user)
      }
  
      return {
        emitShowData
      }
    }
  }
  </script>
  
  <style scoped>
  .btn-outline-primary {
    color: #4da6ff;
    border-color: #4da6ff;
  }
  
  .btn-outline-primary:hover {
    background-color: #4da6ff;
    color: #1e1e1e;
  }
  </style>