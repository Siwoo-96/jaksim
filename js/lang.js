const language = { "한국":"ko-KR", "미국":"en-US", "일본":"ja-JP", "중국":"zh-CN" };

function chooseRegion({ target }) {
    const nation = document.querySelector("#nation");
    const lang = document.querySelector("#lang");
    
    lang.dataset.lang = language[target.textContent];
    nation.textContent = target.textContent;
}

export { chooseRegion };