import { movieData } from "./movieAPI.js";

async function cardView() {
  const cardList = document.querySelector(".cardList");
  cardList.innerHTML = "";
  let data = await movieData();
  let cardData = [];

  //가져온 api의 데이터들을 할당시켜주기
  data.forEach((x) => {
    let _id = x["id"];
    let _title = x["title"];
    let _overview = x["overview"];
    let _poster_path = x["poster_path"];
    let _vote_average = x["vote_average"];

    // html 시작
    let temp_html = `
          <div class="movieCard" data-id="${_id}">
              <img src="https://image.tmdb.org/t/p/w500${_poster_path}">
              <h3>${_title}</h3>
              <p>${_overview}</p>
              <p class="rate">Rating: ${_vote_average}</p>
          </div>
        `;

    cardData.push(temp_html);
    cardList.insertAdjacentHTML("beforeend", temp_html);
    // 가장 마지막 노드에 붙여주기
    // cardList.insertAdjacentHTML("beforeend", temp_html);
  });
}

cardView();
