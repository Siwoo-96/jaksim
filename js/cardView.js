import { movieData } from "./movieAPI.js";

async function cardView() {
  const cardList = document.querySelector(".cardList");
  let movies = await movieData();
  cardList.innerHTML = movies
    .map(
      (movie) => `
<div class="movieCard"  onclick="location.href='./sub.html'" data-id="${movie.id}">
<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
<h3>${movie.title}</h3>
<p>${movie.overview}</p>
<p class="rate">Rating: ${movie.vote_average}</p>
</div>
`
    )
    .join("");
}
cardView();
