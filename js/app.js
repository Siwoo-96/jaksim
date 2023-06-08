import { cardView } from "./cardView.js";
import { chooseRegion } from "./lang.js";
import { searchMovie } from "./searchMovie.js";

document.addEventListener("DOMContentLoaded", () => {
    cardView("ko-KR");
    const dropDown = document.querySelector(".dropDown");
    dropDown.addEventListener("click", chooseRegion);

    const searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const keyword = document.querySelector("#searchInput").value;
        searchMovie(keyword);
    });

    const searchTitle = document.querySelector("#searchInput");
    searchTitle.addEventListener("keyup", () => {
        searchMovie(searchTitle.value);
    });
});
