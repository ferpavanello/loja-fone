const $heart = window.document.querySelector(".-heart");
const $addCart = window.document.querySelector(".button-store.-second");

$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("Salve");
}