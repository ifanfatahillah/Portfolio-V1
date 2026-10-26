let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };
  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };

  // Preview gambar portfolio
const previewButtons = document.querySelectorAll(".preview-btn");
const imagePreview = document.querySelector(".image-preview");
const previewImage = imagePreview.querySelector("img");
const closePreview = document.querySelector(".close-preview");

// Membuka preview saat ikon diklik
previewButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    previewImage.src = button.getAttribute("href");
    imagePreview.style.display = "flex";
  });
});

  // Menutup preview saat tombol X diklik
  closePreview.addEventListener("click", () => {
    imagePreview.style.display = "none";
    previewImage.src = "";
  });

  // Menutup preview saat area gelap diklik
  imagePreview.addEventListener("click", (e) => {
    if (e.target === imagePreview) {
      imagePreview.style.display = "none";
      previewImage.src = "";
    }
  });

  // Menutup preview menggunakan tombol Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      imagePreview.style.display = "none";
      previewImage.src = "";
    }
  });

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    const whatsappNumber = "6287884144600";

    const text = `Halo, saya ingin menghubungi Anda.

Nama: ${name}
Email: ${email}
Subject: ${subject}

Pesan:
${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
});
});
