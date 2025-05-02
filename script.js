// Cambia color de nav en scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
    nav.classList.remove("transparent");
  } else {
    nav.classList.add("transparent");
    nav.classList.remove("scrolled");
  }
});

// Abrir imagen en modal
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

// Cerrar modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Toggle menú móvil
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}