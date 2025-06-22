<template>
    <div class="container mt-4">
      <h2 class="text-center mb-4 ">📰 الأخبار</h2>
  
      <div v-if="news.length === 0" class="text-center text-muted">لا توجد أخبار حالياً</div>
  
      <div>
        <div v-for="item in news" :key="item.id" class="col">
          <div class="card h-100 shadow-sm border-3 rounded-4 p-4 border border-warning" style="background-color: rgb(255,255,255);">
            <img :src="item.imageUrl" class="card-img-top" alt="News Image" v-if="item.imageUrl">
            <div class="card-body">
              <h5 class="card-title ">{{ item.title }}</h5>
              <p class="card-text">{{ item.content }}</p>
              <p class="text-muted small text-end">📅 {{ formatDate(item.date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { db } from '../Firebase'
  import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
  
  const news = ref([])
  
  const fetchNewsLive = () => {
    const q = query(collection(db, 'news'), orderBy('date', 'desc'))
    onSnapshot(q, (snapshot) => {
      news.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    })
  }
  
  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  
  onMounted(fetchNewsLive)
  </script>
  
  <style scoped>
  .txtt {
    font-family: 'Thuluth', serif;
    font-size: 26px;
    text-align: right;
  }
  .card-text {
    text-align: right;
    direction: rtl;
  }
  .card-title {
    direction: rtl;
  }
  </style>
  