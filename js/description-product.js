const $heart = document.querySelector(".-heart");
const $stars = document.querySelector(".-star").childNodes;

$heart.addEventListener("click", handleClick);

function handleClick() {
  $heart.classList.toggle("-active");
}

for (var i = 0; i < $stars.length; i++) {
  $stars[i].addEventListener("click", function(){
    if (this.src.includes("img/star.png")) {
      this.src = "img/star-active.png";
      controlStars($stars, i);
    } else {
      this.src = "img/star.png";
    }
  });
}
