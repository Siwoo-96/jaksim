import { db } from "../subPage/subApp.js";
import { Comment } from "./Comment.js";

// 수정버튼 누른 후 나오는 수정창
function renderUpdatedComment(commentObj) {
    const { id, content, userId, userPassword } = commentObj;
    const comment = document.getElementById(id);
    comment.innerHTML = `
        <div class="writeBox">
            <label>댓글: </label>
            <textarea id="update-content" name="story" rows="5" cols="33">${content}</textarea>
        </div>
        <div class="secureBox b1">
            <label>사용자 ID: </label>
            <input type="text" id="update-user-id" value="${userId}" disabled>
        </div>
        <div class="secureBox b2">
            <label>사용자 PW: </label>
            <input type="password" id="update-user-password" value="${userPassword}" required>
        </div>
        <div class="btnBox">
            <button class="edit" id="update-btn">수정</button>
            <button class="delete" id="cancel-submit-btn">취소</button>
        </div>
    `;

    comment.addEventListener("click", handleUpdateComment);
}

// 댓글 수정 핸들링
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

    // 댓글 수정을 했을 경우
    if (target.id === "update-btn") {
        content = document.querySelector("#update-content").value;
        userId = document.querySelector("#update-user-id").value;
        userPassword = document.querySelector("#update-user-password").value;
        regDate = new Date().toLocaleString();
        const commentObj = new Comment(id, userId, content, userPassword, regDate);
        db.update(commentObj.attributes);
        alert("update");
    }
    // 댓글 수정 취소했을 경우
    if (target.id === "cancel-submit-btn") {
        const data = db.load(id);
        content = data.content;
        userId = data.userId;
        userPassword = data.userPassword;
        regDate = data.regDate;
        alert("cancel");
    }

    comment.innerHTML = `
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
    `;
}

export { renderUpdatedComment }