window.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;


      if (email != "" && password != "") {
        console.log(`Login with: Email: ${email}, Password: ${password}`);
        localStorage.setItem("loggedIn", true);
        window.location.href = "index.html";
      }

    });
  }
});