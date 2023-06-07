import { db } from "./main.js";
import { Comment } from "./Comment.js";

function renderUpdatedComment(commentObj) {
    const { id, content, userId, userPassword } = commentObj;
    const comment = document.getElementById(id);
    comment.innerHTML = `
        <div>
            <label>댓글: </label>
            <textarea id="update-content" name="story" rows="5" cols="33">${content}</textarea>
        </div>
        <div>
            <label>사용자 ID: </label>
            <input type="text" id="update-user-id" value="${userId}" disabled>
        </div>
        <div>
            <label>사용자 PW: </label>
            <input type="password" id="update-user-password" value="${userPassword}" required>
        </div>
        <div>
            <button id="update-btn">수정</button>
            <button id="cancel-submit-btn">취소</button>
        </div>
    `;

    comment.addEventListener("click", handleUpdateComment);
}

function handleUpdateComment({ target }) {
    if (target.id !== "update-btn" && target.id !== "cancel-submit-btn") {
        return;
    }

    const id = target.parentNode.parentNode.id;
    const comment = document.getElementById(id);

    let content;
    let userId;
    let userPassword;
    let regDate;

    if (target.id === "update-btn") {
        content = document.querySelector("#update-content").value;
        userId = document.querySelector("#update-user-id").value;
        userPassword = document.querySelector("#update-user-password").value;
        regDate = new Date().toLocaleString();
        const commentObj = new Comment(id, userId, content, userPassword, regDate);
        db.update(commentObj.attributes);
        alert("update");
    }
    if (target.id === "cancel-submit-btn") {
        const data = db.load(id);
        content = data.content;
        userId = data.userId;
        userPassword = data.userPassword;
        regDate = data.regDate;
        alert("cancel");
    }

    comment.innerHTML = `
        <div>${content}</div>
        <div>${userId}</div>
        <div>${userPassword}(원래 이 값은 안보여야 함)</div>
        <div>${regDate}</div>
        <button class="edit">수정</button>
        <button class="delete">삭제</button>
    `;
}

export { renderUpdatedComment }