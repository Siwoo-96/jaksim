import { cardView } from "./cardView.js";

const URL = 'https://api.themoviedb.org/3';
const KEY = '52d537b416811d07bd31c6b1ae8d4d5a';
let BASE_LANG = 'ko';
let BASE_REGION = 'KR';

async function movieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFjNjgxZjk3MjYyMjY4NWFkYjJkZWQ3MGVlNWU2ZiIsInN1YiI6IjY0NzZkZjNjMTJjNjA0MDBlMWRjNmNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqyMjkuWeOJzkj7UauO06VhfP3Ohg7aD0LigJgVHgyw",
    },
  };
  let response = await fetch(
    `${URL}/movie/popular?api_key=${KEY}&language=${BASE_LANG}&region=${BASE_REGION}`,
    options
  );
  let data = await response.json();
  let movies = data["results"];

  return movies;
}

const nation = document.querySelector("#nation");
const dropDown = document.querySelector(".dropDown");

dropDown.addEventListener('click', (event) => {
  let target = event.target;

  if (target.textContent === '한국') {
    BASE_LANG = 'ko';
    BASE_REGION = 'KR';
    nation.textContent = '한국';
  } else if (target.textContent === '미국') {
    BASE_LANG = 'en';
    BASE_REGION = 'US';
    nation.textContent = '미국';
  } else if (target.textContent === '일본') {
    BASE_LANG = 'ja';
    BASE_REGION = 'JP';
    nation.textContent = '일본';
  } else if (target.textContent === '중국') {
    BASE_LANG = 'zh';
    BASE_REGION = 'CN';
    nation.textContent = '중국';
  }

  cardView();
})


// search
function movieSearch(clk) {
  const movieCards = document.querySelectorAll(".movieCard");

  movieCards.forEach((card) => {
    const title = card.childNodes[2]['nextSibling']['innerText'].split(' ').join('').toLowerCase();

    for (let i = 0; i < title.length; i++) {
      if (title.includes(`${clk}`)) {
        card.style.display = "grid";
      } else {
        card.style.display = "none";
      }
    }
  });
}

document.addEventListener('keyup', function (event) {
  let clk = document.getElementById("searchInput").value.toLowerCase();

  movieSearch(clk);
})

export { movieData };
