window.addEventListener("DOMContentLoaded", (event) => {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const password = document.getElementById('password1').value;
      const password2 = document.getElementById('password2').value;


      if (password2 != "" && password != "" && password == password2) {
        console.log(`register`);
        // localStorage.setItem("loggedIn", true);
        window.location.href = "index.html";
      } else {
        document.getElementById('message').innerHTML = "The passwords don't match"
      }

    });
    console.log(`register`);
  }
});