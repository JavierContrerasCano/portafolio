
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

   
    function openModal(src) {
      const modal = document.getElementById("modal");
      const modalImg = document.getElementById("modal-img");
      modal.style.display = "block";
      modalImg.src = src;
    }

    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }
