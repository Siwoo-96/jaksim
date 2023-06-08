function searchMovie(mes) {
    const movieCards = document.querySelectorAll(".movieCard");

    movieCards.forEach((card) => {
        const title = card.childNodes[2]["nextSibling"]["innerText"]
            .split(" ")
            .join("")
            .toLowerCase();

        for (let i = 0; i < title.length; i++) {
            if (title.includes(`${mes}`)) {
                card.style.display = "grid";
            } else {
                card.style.display = "none";
            }
        }
    });
}

export { searchMovie };