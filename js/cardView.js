import { movieData } from "./movieApi.js";

async function cardView() {
  const cardList = document.querySelector(".cardList");
  let movies = await movieData();
  cardList.innerHTML = movies
    .map(
      (movie) => `
<div class="movieCard" data-id="${movie.id}">
<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
<h3>${movie.title}</h3>
<p>${movie.overview}</p>
<p class="rate">Rating: ${movie.vote_average}</p>
</div>
`
    )
    .join("");
  cardList.addEventListener("click", handleClickCard);
  function handleClickCard({ target }) {
    if (target === cardList) return;

    if (target.matches(".movieCard")) {
      // 페이지 이동
      let queryString = `?id=${target.dataset.id}`;
      location.href = "./sub.html" + queryString;
    } else {
      alert(`id : ${target.parentNode.dataset.id}`);
    }
  }
}

cardView();

export { cardView };