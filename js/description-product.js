const $heart = window.document.querySelector(".-heart");
const $addCart = window.document.querySelector(".button-store.-second");

$heart.addEventListener("click", handleClick);
$addCart.addEventListener("click", handleButtonCart);

function handleClick() {
  console.log("Salve");
}

function handleButtonCart() {
  console.log("Comprou");
}