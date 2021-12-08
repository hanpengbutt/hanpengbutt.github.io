const commentForm = document.querySelector("form");
const commentInput = commentForm.querySelector("input");
const commentList = document.querySelector("#comment-list");

let comments = [];

function saveComment(){
  localStorage.setItem("comments", JSON.stringify(comments));
}

function handleCommentPaint(commentContent){
  const li = document.createElement("li");
  li.innerText = commentContent;
  commentList.appendChild(li);
}

function handleCommentSubmit(event){
  event.preventDefault();
  const commentContent = commentInput.value;
  commentInput.value = "";
  comments.push(commentContent);
  handleCommentPaint(commentContent);
  saveComment();
}

commentForm.addEventListener("submit", handleCommentSubmit);

const savedComments = localStorage.getItem("comments");

if(savedComments){
  const parsedComments = JSON.parse(savedComments);
  comments = parsedComments;
  parsedComments.forEach(handleCommentPaint);
}
