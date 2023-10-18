/**
 *  Requirements:
 *    add the comment from input field after clicking on add Comment btn.
 *      then create a dynamic list of comments with a border and that will contain a text abd reply btn.
 *      clicking on reply btn, a comment input filed and a btn has to appear.
 */

class CommentBox {
    constructor() {
        this.commentInput = document.getElementById('commentInput');
        this.addCommentBtn = document.getElementById('addCommentBtn');
        this.commentList = document.getElementById('commentList');

        this.bindEvents();

    }

    bindEvents() {
        this.addCommentBtn.addEventListener('click', () => {this.addComment()})
    }

    addComment() {
        const inputText = this.commentInput.value.trim();
        console.log(inputText.length);

        if(inputText.length) {
            const newComment = this.createComment(inputText);
            this.commentList.appendChild(newComment);
        }
    }

    createComment(text) {

        const li = document.createElement('li');

        const commmentPElem = document.createElement('p');
        commmentPElem.textContent = text;

        // console.log(text);
        // console.log(commmentPElem);
        // console.log(li);
        li.appendChild(commmentPElem);

        const replyBtn = document.createElement('button');
        replyBtn.className = 'replyBtn';
        replyBtn.textContent = 'Reply';

        replyBtn.addEventListener('click', this.showReplyInput.bind(this));

        li.appendChild(replyBtn);

        const replyContainer = document.createElement('div');

        replyContainer.className = 'reply-container';
        li.appendChild(replyContainer)

        return li;
    }

    showReplyInput(event) {
        const replyBtn = event.target;
        console.log(replyBtn);
        const li  = replyBtn.parentElement;
        const replyContainer = li.querySelector('.reply-container');
        //console.log(replyContainer);

        const replyInput = document.createElement('input');
        replyInput.type = 'text';
        replyInput.placeholder = 'Enter your reply...';

        const addReplyBtn = document.createElement('button');
        addReplyBtn.textContent = 'Add Reply';
        addReplyBtn.addEventListener('click', this.addReply.bind(this, replyContainer, replyInput));

        
        replyContainer.appendChild(replyInput);
        replyContainer.appendChild(addReplyBtn);
    }

    addReply(replyContainer, replyInput) {
       const replyText = replyInput.value.trim();

       if(replyText.length) {
         const replyLi = this.createComment(replyText);
         replyContainer.appendChild(replyLi);
       }
    }
}

new CommentBox();