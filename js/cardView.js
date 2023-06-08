import { movieData } from "./movieApi.js";

async function cardView() {
  const cardList = document.querySelector(".cardList");
  let movies = await movieData();
  cardList.innerHTML = movies
    .map(
      (movie) => `
<div class="movieCard" data-id="${movie.id}">
<<<<<<< HEAD
  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
  <h3>${movie.title}</h3>
  <p>${movie.overview}</p>
  <p class="rate">Rating: ${movie.vote_average}</p>
=======
<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
<h3>${movie.title}</h3>
<p>${movie.overview}</p>
<p class="rate">Rating: ${movie.vote_average}</p>
>>>>>>> 115fd3f2ab3c51cf2d7bcaa037fb7bfe4fb95853
</div>
`
    )
    .join("");
  cardList.addEventListener("click", handleClickCard);
  function handleClickCard({ target }) {
    if (target === cardList) return;
<<<<<<< HEAD
    let queryString;

    if (target.matches(".movieCard")) {
      // 페이지 이동
      queryString = `?id=${target.dataset.id}`;
    } else {
      queryString = `?id=${target.parentNode.dataset.id}`;
    }
    location.href = "./sub.html" + queryString;
=======

    if (target.matches(".movieCard")) {
      // 페이지 이동
      let queryString = `?id=${target.dataset.id}`;
      location.href = "./sub.html" + queryString;
    } else {
      alert(`id : ${target.parentNode.dataset.id}`);
    }
>>>>>>> 115fd3f2ab3c51cf2d7bcaa037fb7bfe4fb95853
  }
}

cardView();

export { cardView };