import { db } from "../subPage/subApp.js";
import { Comment } from "./Comment.js";


// 댓글 작성하면 동작하는 부분
function handleSubmit() {
    const content = document.querySelector("#content").value;
    const userId = document.querySelector("#user-id").value;
    const userPassword = document.querySelector("#user-password").value;
    const regDate = new Date().toLocaleString();
    const commentData = new Comment(
        db.maxIndex,
        userId,
        content,
        userPassword,
        regDate
    );
    db.insert(commentData.attributes);
    renderComment(commentData.attributes);
    // console.log(`${comment}, ${userId}, ${userPassword}`);
}

function renderComment(commentObj) {
    const { id, content, userId, userPassword, regDate } = commentObj;
    const commentList = document.querySelector("#comment-list");
    commentList.innerHTML += `
        <div id="${id}" class="comment">
            <div class="content">
                <p>댓글 : </p>${content}
            </div>
            <div class="userId">
                <p>아이디 : </p>${userId}
            </div>
            <div class="userPw">
                <p>비밀번호 : </p>${userPassword}
            </div>
            <div class="reg">${regDate}</div>
            <button class="edit">수정</button>
            <button class="delete">삭제</button>
        </div>
    `;
}

export { handleSubmit };