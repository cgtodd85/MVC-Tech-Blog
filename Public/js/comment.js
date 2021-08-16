const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

// addButtons();

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);

// Attempting logic to compare usernames to the user currently logged in in order to produce update or delete post buttons
// const comments = document.querySelectorAll(".comment");

// window.addEventListener("load", function () {
//   console.log(session.username);
//   console.log(comments);
//   console.log(comments[0].children[1].children[0].textContent);
// });

// function addButtons() {
//   for (let i = 0; i < comments.length; i++) {
//     const name = comments[i].children[1].children[0].textContent;
//     if (name === sessionStorage.username) {
//     }
//   }
// }

// const userName = document.querySelectorAll(".username");
