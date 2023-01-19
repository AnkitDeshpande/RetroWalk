let signEl = document.getElementById("signupform");

signEl.addEventListener("submit", (event) => {
  event.preventDefault();
  //get all id's :-->

  let nameEl = document.getElementById("name");
  console.log(nameEl);
  let emailEl = document.getElementById("email");
  let passwordEl = document.getElementById("password");
  let obj = {
    name: nameEl.value,
    email: emailEl.value,
    password: passwordEl.value,
  };
  let accountData = JSON.parse(localStorage.getItem("account-data")) || [];
  accountData.push(obj);
  localStorage.setItem("account-data", JSON.stringify(accountData));

  alert("Signup Successful");
});

// let email = document.getElementById("signin-email");
// let password = document.getElementById("signin-password");

// let accountData = JSON.parse(localStorage.getItem("account-data")) || [];

// loginform.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let filtered = accountData.filter(
//     (d) => d.email == email.value && d.password == password.value
//   );

//   if (filtered.length > 0) {
//     alert("login successful");
//   } else {
//     alert("Wrong credentials");
//   }
// });

//
