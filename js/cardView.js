import { fetchMovieData } from "./fetchMovieData.js";

async function setCardView(page, REGION) {
    const cardList = document.querySelector(".cardList");
    const movies = await fetchMovieData(page, REGION);

    if (movies !== null) {
        cardList.innerHTML = movies
            .map(
                (movie) => `
            <div class="movieCard" data-id="${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <h3 class="movie-title">${movie.title}</h3>
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
            const lang = document.querySelector("#lang");

            if (target.matches(".movieCard")) {
                // 페이지 이동
                queryString = `?id=${target.dataset.id}&title=${target.children[1].textContent}&lang=${lang.dataset.lang}`;
            } else {
                queryString = `?id=${target.parentNode.dataset.id}&title=${target.parentNode.children[1].textContent}&lang=${lang.dataset.lang}`;
            }
            location.href = "./sub.html" + queryString;
        }
    }
}

async function addCardView(page, REGION) {
    const cardList = document.querySelector(".cardList");
    console.log(`cardView ${page} loaded`);
    const movies = await fetchMovieData(page, REGION);

    if (movies !== null) {
        cardList.innerHTML += movies
            .map(
                (movie) => `
            <div class="movieCard" data-id="${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <h3 class="movie-title">${movie.title}</h3>
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
            const lang = document.querySelector("#lang");

            if (target.matches(".movieCard")) {
                // 페이지 이동
                // console.log(target.children[1].textContent);
                queryString = `?id=${target.dataset.id}&title=${target.children[1].textContent}&lang=${lang.dataset.lang}`;
            } else {
                // console.log(target.parentNode.children[1].textContent);
                queryString = `?id=${target.parentNode.dataset.id}&title=${target.parentNode.children[1].textContent}&lang=${lang.dataset.lang}`;
            }
            location.href = "./sub.html" + queryString;
        }
    }
}

export { setCardView, addCardView };
