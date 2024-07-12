<template>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
    </thead>
  </template>
  
  <script>
  export default {
    props: {
      headers: {
        type: Array,
        required: true
      }
    }
  }
  </script>