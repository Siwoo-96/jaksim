// import { movieData } from "./movieAPI.js";

// 튜더님께 질문하기

function detailView() {
  // let postMain = document.querySelect("#post-main");

  // postMain.addEventListener("click", (event) => {
  //   if (event.target.matches("movieCard")) {
  //     window.location.assign("http://127.0.0.1:5500/sub.html");
  //   }
  // });

  const clickCard = document.querySelectorAll(".movieCard");
  clickCard.innerHTML = "";
  clickCard.forEach((card) => {
    card.addEventListener("click", function () {
      let movieID = this.getAttribute("data-id");
      let movieTitle = this.getAttribute("data-title");
      let movieOverview = this.getAttribute("data-overview");
      let moviePosterPath = this.getAttribute("data-posterPath");
      let movieVoteAverage = this.getAttribute("data-voteAverage");
      //html 구성 어떻게 해야할지 ,,,, 같이 얘기해주실 재혁님 구합니다..
      let temp_html = `
                          <div class="movieCard" data-id="${movieID}">
                              <img src="https://image.tmdb.org/t/p/w500${moviePosterPath}">
                              <h3>${movieTitle}</h3>
                              <p>${movieOverview}</p>
                              <p>Rating: ${movieVoteAverage}</p>
                          </div>`;
      clickCard.insertAdjacentHTML("beforeend", temp_html);
      console.log(clickCard);
    });
  });
}

detailView();
