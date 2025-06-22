<template>
  <nav class="navbar custom-navbar sticky-top">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand brand-text txtt text-box fw-bold" href="#">
        <img class="icon" src="https://cdn-icons-gif.flaticon.com/12743/12743734.gif" alt="">
        الشيخ عيسى مال الله
      </a>
      <ul class="navbar-nav flex-row gap-3">
        <li class="nav-item">
          <a class="nav-link nav-link-custom txtt text-box fw-bolder  sticky-top" href="#AutherSection">المؤلف</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom txtt text-box fw-bolder  sticky-top" href="#BooksSection">الكتب</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.icon {
  width: 50px;
}

.text-box {
  border: 2px solid orange;
  background-color: white;
  padding: 20px;
  color: rgb(0, 0, 0);
  display: inline-block;
  border-radius: 60%;
  font-size: 1.8rem;
  text-shadow: 30px;
}

@media (max-width: 992px) {
  .text-box {
    font-size: 1.8rem;
    padding: 15px;
    border-radius: 60%;
  }
  .icon {
  width: 41px;
}
}

@media (max-width: 768px) {
  .text-box {
    font-size: 1.4rem;
    padding: 13px;
    border-radius: 60%;
  }
  .icon {
  width: 38px;
}
}

@media (max-width: 576px) {
  .text-box {
    font-size: 1rem;
    padding: 12px;
    border-radius: 60%;
  }
  .icon {
  width: 35px;
}
}
</style>
