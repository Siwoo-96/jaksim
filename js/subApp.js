import { detailView } from "./detailView.js";
import { PseudoDB } from "./handleComment/PseudoDB.js";
import { handleSubmit } from "./handleComment/commentHandler.js";
import { handleCommentEdit } from "./handleComment/commentHandleEdit.js";

// export
export const db = new PseudoDB();
localStorage.clear();

document.addEventListener("DOMContentLoaded", () => {
    detailView();
    const commentForm = document.querySelector("#comment-form");
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        handleSubmit();

        document.querySelector("#content").value = null;
        document.querySelector("#user-id").value = null;
        document.querySelector("#user-password").value = null;
    });

    const commentList = document.querySelector("#comment-list");
    commentList.addEventListener("click", handleCommentEdit);
});

// start
