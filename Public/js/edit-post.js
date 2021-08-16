const editFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const post_title = document.querySelector('input[name="post-title"]').value;
  const blog_content = document.querySelector(
    'textarea[name="post-content"]'
  ).value;

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      blog_content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
