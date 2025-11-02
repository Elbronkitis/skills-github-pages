// form.js — validación ligera y simulación de envío (para contacto.html)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const msg = document.getElementById("formMessage");

  // Si venimos de un link con query ?producto=... rellenar campo producto
  const params = new URLSearchParams(window.location.search);
  const productoParam = params.get("producto");
  if (productoParam) {
    const prodField = document.getElementById("producto");
    if (prodField) prodField.value = decodeURIComponent(productoParam);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    if (!nombre || !email || !mensaje) {
      msg.textContent = "Por favor completa todos los campos requeridos.";
      msg.style.color = "crimson";
      return;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      msg.textContent = "Introduce un correo válido.";
      msg.style.color = "crimson";
      return;
    }
    msg.textContent = "Enviando...";
    msg.style.color = "#333";
    setTimeout(() => {
      msg.textContent = "Mensaje enviado correctamente ✅";
      msg.style.color = "green";
      form.reset();
    }, 900);
  });
});
