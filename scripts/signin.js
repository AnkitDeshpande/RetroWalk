let signupBtn = document.querySelector("#signup");
let loginBtn = document.querySelector("#sign-in");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let newUser = { name: name, email: email, password: password };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! Welcome " + name);
});

loginBtn.addEventListener("click", (e) => {
  console.log("ok");
  let storedUsers = JSON.parse(localStorage.getItem("users"));
  e.preventDefault();
  let email = document.querySelector("#signin-email").value;
  let password = document.querySelector("#signin-password").value;
  let foundUser = storedUsers.find(
    (user) => user.email === email && user.password === password
  );
  if (foundUser) {
    alert("Login successful! Welcome back " + foundUser.name);
    location.href = "Checkout.html";
  } else {
    alert("Wrong credentials. Please try again.");
  }
});
