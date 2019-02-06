const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClickHeart);

function handleClickHeart() {
  this.classList.toggle("-active");
}

$stars.forEach(function($star) {
  $star.addEventListener('click', handleClickStars);
});

function handleClickStars() {
  this.classList.toggle("-active");
  controlStars(this.id);
}

function controlStars(selectId) {  
  $stars.forEach(function($star) {
    if(selectId >= $star.id && !$star.classList.contains("-active")) {
      $star.className += " -active";
    }
    if(selectId < $star.id && $star.classList.contains("-active")) {
      $star.classList.remove("-active");
    }
  });
}