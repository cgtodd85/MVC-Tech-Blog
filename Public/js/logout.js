const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);

// async function logout() {
//   const response = await fetch("/api/users/logout", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert(response.statusText);
//   }
// }

// function resetTimer() {
//   let time;
//   clearTimeout(time);
//   time = setTimeout(logout, 1000 * 60 * 30);
// }

// function idleTimer() {
//   window.onmousemove = resetTimer;
//   window.onmousedown = resetTimer;
//   window.onclick = resetTimer;
//   window.onscroll = resetTimer;
//   window.onkeypress = resetTimer;
// }

// idleTimer();

// document.querySelector("#logout").addEventListener("click", logout);
