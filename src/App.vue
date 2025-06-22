<template>
  <div class="backgroundbase">
    <Header />
    <AuthorInfo />
    <NewsList />
    <BookItem />
    <Footer />
  </div>
</template>

<style>
/* You can add global styles to this file, and also import other style files */



html {
  font-family: 'Amiri', serif;
}


body {
  direction: rtl;
  text-align: right;
  font-family: 'Amiri', serif;
}
.backgroundbase{
  background-color: rgba(235, 250, 250, 0.127);
  background-image: url('assets/Images_Cover/ChatGPT\ Image\ Apr\ 17\,\ 2025\,\ 12_56_16\ PM.png');
  background-attachment: fixed;
  background-position: center;
  overflow: hidden;

}
    
    
  
    
@font-face {
font-family: 'Thuluth';
src: url('assets/alsamt diwani.ttf') format('truetype');
}
   
.txtt {
  font-family: 'Thuluth', serif;
  font-size: 28px;
}
    
</style>


<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AuthorInfo from "./components/AuthorInfo.vue";
import BookItem from './components/BookItem.vue';
import NewsList from './components/NewsList.vue'


export default {
  components: {
    Header,
    Footer,
    AuthorInfo,
    BookItem,
    NewsList    
  }
};

</script>
