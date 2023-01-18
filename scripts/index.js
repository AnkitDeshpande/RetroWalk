let cont = document.getElementById("product-container");
let filterBy = document.getElementById("filter");
let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

async function getData() {
  try {
    const response = await fetch(
      "https://63c791ce5c0760f69ab9abcc.mockapi.io/product"
    );
    const data = await response.json();
    console.log(data);
    filterdata(data);
  } catch (error) {
    console.error(error);
  }
}
getData();

filterBy.addEventListener("change", () => {
  getData();
});
function filterdata(data) {
  let filterValue = filterBy.value;

  if (filterValue === "") {
    displayproduct(data);
  } else {
    data = data.filter((product) => {
      //it will return boolean value;
      return product.category == filterValue;
    });
    displayproduct(data);
  }
}

function displayproduct(data) {
  cont.innerHTML = "";
  data.forEach((element) => {
    let cardEl = document.createElement("div");
    let imgEl = document.createElement("img");
    let brandEl = document.createElement("h3");
    let categoryEl = document.createElement("h6");
    let detailEl = document.createElement("p");
    let priceEl = document.createElement("h4");
    let addToCart = document.createElement("button");

    imgEl.src = element.iamge;
    brandEl.textContent = element.name;
    priceEl.textContent = `₹` + element.price;
    detailEl.textContent = element.desc;
    categoryEl.textContent = element.category;
    addToCart.textContent = "Add To Cart";

    // adding events to button "Add to cart" here:-
    addToCart.addEventListener("click", () => {
      if (checkduplicate(element)) {
        alert("Product Already in Cart");
      } else {
        cartArr.push({ ...element, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cartArr));
        alert("Product Added To Cart");
      }
    });

    // appending contents
    cardEl.append(imgEl, brandEl, priceEl, detailEl, categoryEl, addToCart);
    cont.append(cardEl);
  });
}

//check if product is already in cart.
function checkduplicate(product) {
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id === product.id) {
      return true;
    }
  }
  return false;
}
