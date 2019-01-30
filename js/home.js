let valorInicial = 10;
const $second = document.querySelector(".button-store.-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".header-store .action.-last");

  $carrinho.textContent = `Carrinho(${++valorInicial})`;
}
