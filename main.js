import { productsList } from "./homeProductCards.js";

// fetching data from products.json file
fetch("./api/products.json")
  .then((res) => res.json())
  .then((data) => productsList(data))
  .catch((error) =>
    console.log(error, "error fetching data from products.json file")
  );

let totalItems = document.querySelector(".add-to-cart-button");

totalItems.textContent = JSON.parse(localStorage.getItem("produts")).length;
