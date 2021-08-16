const addPostBtn = document.querySelector("#add-post-btn");
const createPostEl = document.querySelector("#create-post-card");

function toggleHide(event) {
  event.preventDefault();
  createPostEl.classList.remove("hide");
  addPostBtn.classList.add("hide");
}

const newFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value;
  const blog_content = document.querySelector(
    'textarea[name="post-content"]'
  ).value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      post_title,
      blog_content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    addPostBtn.classList.remove("hide");
    createPostEl.classList.add("hide");
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
addPostBtn.addEventListener("click", toggleHide);
