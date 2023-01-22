const deliveryForm = document.getElementById("delivery-form");
deliveryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const mobileNumber = document.getElementById("mobile-number").value;
  const state = document.getElementById("state").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;

  const deliveryDetails = {
    firstName,
    lastName,
    mobileNumber,
    state,
    address,
    pincode,
  };

  let storedDeliveryDetails =
    JSON.parse(localStorage.getItem("DeliveryDetails")) || [];

  storedDeliveryDetails.push(deliveryDetails);

  localStorage.setItem(
    "DeliveryDetails",
    JSON.stringify(storedDeliveryDetails)
  );
  alert("Your order has been placed!");
  location.href = "/index.html";
});
