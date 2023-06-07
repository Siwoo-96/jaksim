import { movieData } from "./movieApi.js";

//<div class="movieCard"  onclick="location.href='./sub.html' data-id="${movie.id}">

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
<div class="star_box">
            <div class="star">
              <div class="fill_star" style="width: ${movie.vote_average / 10 * 100}%;">★★★★★</div>
              <div class="none_star">☆☆☆☆☆</div>
            </div>
          </div>
</div>
`
    )
    .join("");
}
cardView();

export { cardView };