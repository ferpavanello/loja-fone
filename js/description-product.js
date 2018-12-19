const $heart = window.document.querySelector(".-heart");
const $addCart = window.document.querySelector(".button-store.-second");
const $cart = window.document.querySelector(".header-store .action.-last");

$heart.addEventListener("click", handleClick);
$addCart.addEventListener("click", handleButtonCart);

function handleClick() {
  console.log("Salve");
}

function handleButtonCart() {
  $cart.text = "Comprado";
}