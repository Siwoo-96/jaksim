import { db } from "./main.js";
import { Comment } from "./Comment.js";

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
        <div id="${id}" class="comment" style="padding:10px;">
            <div>${content}</div>
            <div>${userId}</div>
            <div>${userPassword}(원래 이 값은 안보여야 함)</div>
            <div>${regDate}</div>
            <button class="edit">수정</button>
            <button class="delete">삭제</button>
        </div>
    `;
}

export { handleSubmit };