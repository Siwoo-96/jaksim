// search btn
function movieSearch() {
    let search = document.getElementById('searchInput').value;
    let btn = document.getElementById('searchBtn').value;
    alert('검색 중 이니까 잠시만 기다려주시와요~^^');
    
}

// inputBox 값 입력 후 엔터!


// nation
const nation = document.querySelector("#nation");
const drop_down = document.querySelector(".dropDown");

let BASE_LANG = 'ko';
let BASE_REGION = 'KR';

nation.addEventListener('click', (event) => {
  let target = event.target;
  drop_down.classList.remove('hidden');
})

drop_down.addEventListener('click', (event) => {
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

  drop_down.classList.add('hidden');
})