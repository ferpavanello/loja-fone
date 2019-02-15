const $headerStore = document.querySelector(".header-store");
const $list = $menuHamburguer.querySelector(".list");
const $menu = $menuHamburguer.querySelector(".-menu");

$menu.addEventListener("click", () => {
  $list.classList.toggle("-active");
});
