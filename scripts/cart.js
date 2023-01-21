let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cont = document.getElementById("cart-container");

//displaying cart and items inside it using localstorage.
displayproduct(cart);
function displayproduct(data) {
  cont.innerHTML = "";
  cart.forEach((element) => {
    let cardEl = document.createElement("div");
    let imgEl = document.createElement("img");
    let brandEl = document.createElement("h3");
    let categoryEl = document.createElement("p");
    let detailEl = document.createElement("p");
    let quantityEl = document.createElement("span");
    let priceEl = document.createElement("h4");
    let addToCart = document.createElement("button");
    let increment = document.createElement("button");
    let decrement = document.createElement("button");
    let remove = document.createElement("button");
    remove.setAttribute("id", "btn");

    imgEl.src = element.img;
    brandEl.textContent = element.brand;
    priceEl.textContent = `₹` + element.price;
    detailEl.textContent = element.details;
    categoryEl.textContent = element.category;
    quantityEl.textContent = element.quantity;
    increment.textContent = "+";
    decrement.textContent = "-";
    remove.textContent = "Remove";

    // adding events to button "Add to cart" here:-
    remove.addEventListener("click", () => {
      cart = cart.filter((ele) => {
        return ele.id !== element.id;
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      displayproduct();
    });
    increment.addEventListener("click", () => {
      element = element.quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      displayproduct();
    });
    decrement.addEventListener("click", () => {
      if (element.quantity > 1) {
        element = element.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      displayproduct();
    });

    cardEl.append(
      imgEl,
      brandEl,
      priceEl,
      detailEl,
      decrement,
      quantityEl,
      increment,
      remove
    );
    cont.append(cardEl);
  });

  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price * cart[i].quantity;
  }
  let total = document.getElementById("cart-total");
  total.textContent = sum;
}

function placed() {
  location.href = "signin.html";
}
