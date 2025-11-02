// Menú responsive
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

if (btnMenu) {
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });
}
