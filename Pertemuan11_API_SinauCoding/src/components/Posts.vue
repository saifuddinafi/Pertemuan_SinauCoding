<template>
    <div class="container-fluid px-4 py-3">
      <h1 class="axios-title mb-4">Axios</h1>
      
      <div class="mb-5">
        <h2 class="section-title mb-3">Post</h2>
        <div v-for="post in posts" :key="post.id" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
          </div>
        </div>
      </div>
  
      <div>
        <h2 class="section-title mb-3">Author</h2>
        <div class="row g-3">
          <div v-for="author in authors" :key="author.id" class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">{{ author.name }}</h5>
                <p class="card-text mb-1">{{ author.username }}</p>
                <p class="card-text">{{ author.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  export default {
    name: 'PostAuthor',
    setup() {
      const posts = ref([])
      const authors = ref([])
  
      const fetchPosts = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
          posts.value = response.data.slice(0, 3)
        } catch (error) {
          console.error('Error fetching posts:', error)
        }
      }
  
      const fetchAuthors = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users')
          authors.value = response.data.slice(0, 5)
        } catch (error) {
          console.error('Error fetching authors:', error)
        }
      }
  
      onMounted(() => {
        fetchPosts()
        fetchAuthors()
      })
  
      return {
        posts,
        authors
      }
    }
  }
</script>