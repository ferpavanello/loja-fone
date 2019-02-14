const $menuHamburguer = document.querySelector(".menu-hamburguer");
const $open = $menuHamburguer.querySelector(".-open");
const $close = $menuHamburguer.querySelector(".-close");

$open.addEventListener("click", event => {
  event.preventDefault();

  $menuHamburguer.classList.toggle("-active");
  $open.classList.remove("-active");
  $close.classList.add("-active");
});

$close.addEventListener("click", event => {
  event.preventDefault();

  $menuHamburguer.classList.toggle("-active");
  $close.classList.remove("-active");
  $open.classList.add("-active");
});
