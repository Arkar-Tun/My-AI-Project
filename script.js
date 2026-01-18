document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    alert("NexStaff မှ ကြိုဆိုပါတယ် Boss!");

    window.location.href = "login.html";
  });
