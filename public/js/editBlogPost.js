let blogPost = window.location.pathname.split("/");


const editPost = async (event) => {
  event.preventDefault();
  console.log("clicked me");

  const comment_body = document.getElementById("editBtn").value.trim();

  document.location.assign('/create?id=1');
};

const editButton = document.querySelectorAll("#editBtn");


for (let i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", editPost)}