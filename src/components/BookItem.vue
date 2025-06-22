<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'

const books = ref([])

const fetchBooks = async () => {
  const snapshot = await getDocs(collection(db, 'books'))
  books.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

onMounted(fetchBooks)
</script>

<template>
  <div class="container mt-5 text-end" id="BooksSection" dir="rtl">
    <h2 class="mb-4">📚 قائمة الكتب</h2>

    <div class="row">
      <div class="col-md-6 col-lg-4 mb-4" v-for="book in books" :key="book.id">
        <div class="card h-100 shadow-sm border-3 rounded-4 p-4 border border-warning" style="background-color: rgb(255, 255, 255);">
          <img :src="book.imageUrl" class="card-img-top " alt="غلاف الكتاب" style="object-fit: contain; height: 250px;" />
          <div class="card-body">
            <h5 class="card-title textColor">{{ book.title }}</h5>
            <p class="card-text ">{{ book.description }}</p>
          </div>
          <div class="card-footer text-start">
            <a :href="book.fileUrl" target="_blank" class="btn btn-outline-primary btn-sm">
              📖 قراءة الكتاب
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.textColor{
color: rgb(68, 36, 100);
}

@font-face {
    font-family: '2Thuluth';
    src: url('@/assets/DTHULUTH-II-2.ttf') format('truetype');
}

.txtt2 {
    font-family: '2Thuluth', serif;
    font-size: 28px;
}
</style>
