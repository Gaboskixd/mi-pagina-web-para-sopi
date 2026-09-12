function irACarta() {
  window.location.href = "carta.html";
}

function mostrarRechazo() {
  window.location.href = "rechazo.html";
}

function volver(pagina) {
  window.location.href = pagina;
}

function continuar(pagina) {
  window.location.href = pagina;
}

function abrirMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.classList.toggle("abierto");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#menu a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const menu = document.getElementById("menu");
      if (menu) menu.classList.remove("abierto");
    });
  });
});
