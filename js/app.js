import { setCardView, addCardView } from "./cardView.js";
import { chooseRegion } from "./lang.js";
import { searchMovie } from "./searchMovie.js";

let page = 1;

document.addEventListener("DOMContentLoaded", () => {
    const language = document.querySelector("#lang");
    language.dataset.lang = navigator.language;
    setCardView(page, navigator.language);
    const dropDown = document.querySelector(".dropDown");
    dropDown.addEventListener("click", (event) => {
        chooseRegion(event);
        setCardView(1, lang.dataset.lang);
        page = 1;
    });
    
    

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

document.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && (document.body.offsetHeight - window.scrollY) < 1000) {
        const lang = document.querySelector('#lang').dataset.lang;
        page += 1;
        addCardView(page, lang);
    }
});