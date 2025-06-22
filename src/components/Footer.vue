<template>
  <footer class="custom-footer text-center text-dark mt-auto">
    <div class="container py-4">
      <div class="row align-items-center">
        <div class="col-md-6 mb-3 mb-md-0">
          <h5 class="follow-text">📢 يمكنكم متابعتنا على الصفحات التالية:</h5>
        </div>
        <div class="col-md-6">
          <div class="footer-social d-flex justify-content-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=100011476264673" class="social-icon" aria-label="Facebook">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook">
            </a>
            <a href="https://al-forqan.net/author/writer_939/" target="_blank" class="social-icon" aria-label="Instagram">
              <img src="https://cdn-icons-png.flaticon.com/512/1903/1903162.png" alt="Instagram">
            </a>
            <a href="https://x.com/eisamallallah?t=5fEbeuqCztpm8-QWhNRC5w&s=35" target="_blank" class="social-icon" aria-label="Instagram">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTwnA_cbtpvYtWYfPtisBpkedtXxX0Xy6fQ&s" alt="Instagram">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #8080809d;
  color: #000000;
  font-size: 0.9rem;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.05);
}

.footer-social a img {
  width: 25px;
  transition: 0.3s;
}

.footer-social a img:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .footer-social a img {
    text-align: center;
  }
}
</style>
