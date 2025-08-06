document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const menuContainer = document.getElementById("menu-container");

  hamburgerBtn.addEventListener("click", () => {
    console.log("Botón de hamburguesa clickeado");
    menuContainer.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".header__menu__link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
