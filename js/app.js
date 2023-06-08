import { cardView } from "./cardView.js";
import { chooseRegion } from "./lang.js";
import { searchMovie } from "./searchMovie.js";

document.addEventListener("DOMContentLoaded", () => {
    cardView("ko-KR");
    const dropDown = document.querySelector(".dropDown");
    dropDown.addEventListener("click", chooseRegion);

    document.addEventListener("keyup", function (event) {
        let clk = document.getElementById("searchInput").value.toLowerCase();
    
        searchMovie(clk);
    });
});
