let api =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
let cont = document.getElementById("product-container");
let filterBy = document.getElementById("filter");
let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let searchbtn = document.querySelector(".search__button");
let searchinput = document.querySelector(".search__input");
let data;

async function fetchdata() {
    try {
        let res = await fetch(api);
        res = await res.json();
        console.log(res);
        data = res.data;
        filterdata(data);
    } catch (error) {
        console.log(error);
    }
}
fetchdata();

filterBy.addEventListener("change", () => {
    fetchdata();
});
function filterdata(data) {
    let filterValue = filterBy.value;

    if (filterValue === "") {
        displayproduct(data);
    } else {
        data = data.filter((product) => {
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
        let categoryEl = document.createElement("p");
        let detailEl = document.createElement("p");
        let priceEl = document.createElement("h4");
        let addToCart = document.createElement("button");

        imgEl.src = element.img;
        brandEl.textContent = element.brand;
        priceEl.textContent = `₹` + element.price;
        detailEl.textContent = element.details;
        categoryEl.textContent = element.category;
        addToCart.textContent = "Add To Cart";

        addToCart.addEventListener("click", () => {
            if (checkduplicate(element)) {
                alert("Product Already in Cart");
            } else {
                cartArr.push({ ...element, quantity: 1 });
                localStorage.setItem("cart", JSON.stringify(cartArr));
                alert("Product Added To Cart");
            }
        });

        cardEl.append(imgEl, brandEl, priceEl, detailEl, categoryEl, addToCart);
        cont.append(cardEl);
    });
}

function checkduplicate(product) {
    for (let i = 0; i < cartArr.length; i++) {
        if (cartArr[i].id === product.id) {
            return true;
        }
    }
    return false;
}

searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let searchParams = searchinput.value;
    let filtered = data.filter((element) => {
        if (
            element.brand.toUpperCase().includes(searchParams.toUpperCase()) ===
            true
        ) {
            return true;
        } else {
            return false;
        }
    });
    displayproduct(filtered);
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("mouseover", (e) => {
        const content = e.target.querySelector(".btncontent");
        content.style.display = "block";
    });
    button.addEventListener("mouseout", (e) => {
        if (!e.relatedTarget || !e.relatedTarget.closest("button")) {
            const content = e.target.querySelector(".btncontent");
            content.style.display = "none";
        }
    });
});
