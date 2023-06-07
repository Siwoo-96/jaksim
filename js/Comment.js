class Comment {
    constructor(commentId, userId, userContent, userPassword, regDate) {
        this.commentId = commentId;
        this.userId = userId;
        this.userContent = userContent;
        this.userPassword = userPassword;
        this.regDate = regDate;
    }

    // getCommentId() {
    //     return this.commentId;
    // }

    // getUserId() {
    //     return this.userId;
    // }

    // getUserComment() {
    //     return this.userComment;
    // }
    
    // getUserPassword() {
    //     return this.userPassword;
    // }

    // setCommentId(commentId) {
    //     this.commentId = commentId;
    // }

    // setUserId(id) {
    //     this.userId = id;
    // }

    // setUserComment(comment) {
    //     this.userComment = comment;
    // }

    // setUserPassword(password) {
    //     this.userPassword = password;
    // }

    validateId(id) {
        return this.validate(this.id, id);
    }

    validatePassword(password) {
        console.log(password);
        return this.validate(this.userPassword, password);
    }
    
    validate(item1, item2) {
        if (item1.toString() === item2.toString()) {
            return true;
        }
        else {
            return false;
        }
    }
    get attributes() {
        return {
            id: this.commentId,
            content: this.userContent,
            userId: this.userId,
            userPassword: this.userPassword,
            regDate: this.regDate
        };
    }
}

export { Comment };