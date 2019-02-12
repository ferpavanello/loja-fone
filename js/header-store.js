const $search = document.querySelector('[type=search]');
const $imgSearch = document.querySelector('.img-search');

$imgSearch.addEventListener('click', () => {
    $imgSearch.classList.toggle("-active");
    $search.classList.toggle("-active");
});
