function searchMovie(keyword) {
    const movieCards = document.querySelectorAll(".movieCard");
    keyword = keyword.toLowerCase().split(" ").join("");
    console.log(keyword);
    movieCards.forEach((card) => {
        const title = card.children[1].outerText.toLowerCase().split(" ").join("");;

        if (title.includes(keyword)) {
            card.style.display = "grid";
        }
        else {
            card.style.display = "none";
        }
    });
}

export { searchMovie };