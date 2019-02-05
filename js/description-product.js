const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);
$stars.addEventListener("click", handleClick);

$stars.forEach(function($star) {
  $star.addEventListener('click', handleStar);
});

function handleClick() {
  this.classList.toggle("-active");
}