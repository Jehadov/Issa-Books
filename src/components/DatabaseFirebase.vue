<!-- src/components/BookList.vue -->
<script setup>
import { onMounted, ref } from 'vue'

// Import from CDN
const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js")

const books = ref([])

const fetchBooks = async () => {
  const querySnapshot = await getDocs(collection(window.db, 'books'))
  books.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

onMounted(fetchBooks)
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Books</h2>
    <div v-if="books.length === 0">No books found.</div>
    <ul class="space-y-4">
      <li v-for="book in books" :key="book.id" class="border p-4 rounded shadow">
        <img :src="book.imageUrl" alt="Book cover" class="w-32 mb-2" />
        <h3 class="text-lg font-semibold">{{ book.title }}</h3>
        <p>{{ book.description }}</p>
        <a :href="book.fileUrl" target="_blank" class="text-blue-600">📖 View Book</a>
      </li>
    </ul>
  </div>
</template>
