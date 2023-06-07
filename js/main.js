import { PseudoDB } from "./PseudoDB.js";
import { handleSubmit } from "./commentHandler.js";
import { handleCommentEdit } from "./commentHandleEdit.js";

export const db = new PseudoDB();
localStorage.clear();

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