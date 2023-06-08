import { cardView } from "./cardView.js";

function chooseRegion({ target }) {
    const nation = document.querySelector("#nation");
    const lang = document.querySelector("#lang");
    if (target.textContent === "한국") {
        lang.dataset.lang = "ko-KR";
        nation.textContent = "한국";
    } else if (target.textContent === "미국") {
        lang.dataset.lang = "en-US";
        nation.textContent = "미국";
    } else if (target.textContent === "일본") {
        lang.dataset.lang = "ja-JP";
        nation.textContent = "일본";
    } else if (target.textContent === "중국") {
        lang.dataset.lang = "zh-CN";
        nation.textContent = "중국";
    }
    cardView(lang.dataset.lang);
}

export { chooseRegion };