// import { fetchMovieData } from "./fetchMovieData.js";
import { queryMovie } from "./queryMovie.js";

async function detailView() {
    const urlParams = new URL(location.href).searchParams;
    const id = Number(urlParams.get("id"));
    const lang = urlParams.get("lang");
    const title = urlParams.get("title");
    const movies = await queryMovie(title, lang);

    // // 예외처리
    const result = movies.find((x) => x.id === id);
    if (!result) {
        alert("페이지의 정보값이 올바르지 않습니다");
        history.back();
    }

    const movieDetails = document.querySelector(".subBox");
    movieDetails.innerHTML = `
        <div class="movieCard" data-id="${result.id}">
            <img src="https://image.tmdb.org/t/p/w500${result.poster_path}">
            <h3>${result.title}</h3>
            <p>${result.overview}</p>
            <p class="rate">Rating: ${result.vote_average}</p>
        </div>
    `;
}

export { detailView };