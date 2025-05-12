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




document.getElementById('form-contacto').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío normal

  const form = e.target;
  const data = new FormData(form);

  fetch('https://formsubmit.co/contrerascanojavier@gmail.com', {
    method: 'POST',
    body: data
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById('mensaje-exito').style.display = 'block';
    } else {
      alert("Hubo un error al enviar el formulario.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Error al enviar el mensaje.");
  });
});



let imagenes = [];
let indice = 0;

function openLightbox(img) {
  const galeria = img.parentElement.querySelectorAll('img');
  imagenes = Array.from(galeria).map(i => i.src);
  indice = imagenes.indexOf(img.src);

  document.getElementById('lightbox-img').src = imagenes[indice];
  document.getElementById('lightbox').style.display = 'flex';
}

function cerrarLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function cambiarImagen(direccion) {
  indice = (indice + direccion + imagenes.length) % imagenes.length;
  const imgElement = document.getElementById('lightbox-img');
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = imagenes[indice];
    imgElement.style.opacity = 1;
  }, 200);
}

document.addEventListener('keydown', function(e) {
  if (document.getElementById('lightbox').style.display === 'flex') {
    if (e.key === "ArrowRight") cambiarImagen(1);
    if (e.key === "ArrowLeft") cambiarImagen(-1);
    if (e.key === "Escape") cerrarLightbox();
  }
});