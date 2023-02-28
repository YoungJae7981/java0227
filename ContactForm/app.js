let sendButton = document.getElementById("send");
let resetButton = document.getElementById("reset");
let form = document.getElementById("form");

form.addEventListener("click", function (e) {
  e.preventDefault();
});

resetButton.addEventListener("click", function () {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("message");
  name.value = "";
  email.value = "";
  message.value = "";
});

sendButton.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
});
