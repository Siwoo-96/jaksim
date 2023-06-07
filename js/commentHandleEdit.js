import { db } from "./main.js";
import { Comment } from "./Comment.js";
import { renderUpdatedComment } from "./commentHandleUpdate.js";

function handleCommentEdit({ target }) {
    if (target.matches(".edit")) {
        // 댓글 수정
        // alert(target.parentNode.id);
        const { id, content, userId, userPassword, regDate } = db.load(
            target.parentNode.id
        );
        // const data = db.load(target.parentNode.id);
        const comment = new Comment(id, content, userId, userPassword, regDate);
        let password = prompt("비밀번호를 입력하세요", "비밀번호 모르겠쥬?");

        if (comment.validatePassword(password)) {
            // alert("페이지 렌더링");
            renderUpdatedComment(comment.attributes);
        } else {
            alert("비밀번호 틀렸쥬? 노망나서 생각 안나쥬?");
        }
    }
    if (target.matches(".delete")) {
        const parent = document.querySelector("#comment-list");
        const child = document.getElementById(target.parentNode.id);
        db.delete(target.parentNode.id);
        parent.removeChild(child);
    }
}

export { handleCommentEdit };