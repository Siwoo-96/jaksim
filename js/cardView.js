import { fetchMovieData } from "./fetchMovieData.js";

async function cardView(region) {
    const cardList = document.querySelector(".cardList");
    let movies = await fetchMovieData(region);
    cardList.innerHTML = movies.map((movie) => `
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
        let queryString;
        const lang = document.querySelector('#lang');
        
        if (target.matches(".movieCard")) {
            // 페이지 이동
            queryString = `?id=${target.dataset.id}&lang=${lang.dataset.lang}`;
        } else {
            queryString = `?id=${target.parentNode.dataset.id}&lang=${lang.dataset.lang}`;
        }
        location.href = "./sub.html" + queryString;
    }
}

export { cardView };
