let signupBtn = document.querySelector("#signup");
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let newUser = { name: name, email: email, password: password };

  localStorage.setItem("user", JSON.stringify(newUser));
  alert("Signup successful! Welcome " + name);
});

let loginBtn = document.querySelector("#signin");
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
//Login functionality
// loginBtn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let email = document.querySelector("#signin-email").value;
//   let password = document.querySelector("#signin-password").value;

//   if (storedUser.email === email && storedUser.password == password) {
//     alert("Login successful! Welcome back " + storedUser.name);
//   } else {
//     alert("Wrong credentials. Please try again.");
//   }
// });
