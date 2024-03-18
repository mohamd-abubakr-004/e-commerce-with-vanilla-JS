import {
  cartDecrement,
  cartIncrement,
  removeItemFormLS,
} from "./updateLocalStorage.js";
import { totalPrices } from "./pament.js";

const orderList = () => {
  let productsData = [];

  fetch("./api/products.json")
    .then((res) => res.json())
    .then((data) => (productsData = data));

  let localStorageOrder = JSON.parse(localStorage.getItem("produts"));

  const orderCardBody = document.getElementById("orderCard");

  totalPrices();

  orderCardBody.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target.className === "cartIncrement") {
      if (Number(e.target.nextElementSibling.textContent) < 5) {
        let howManyItems = e.target.nextElementSibling;

        let dataAttri = document.getElementById(
          `${e.target.nextElementSibling.getAttribute("data-id")}`
        );

        let productPrice = productsData.find(
          (data) =>
            Number(data.id) === Number(dataAttri.getAttribute("id")) && data
        );

        let totalPrice = e.target.parentElement.previousElementSibling;

        e.target.nextElementSibling.textContent =
          Number(e.target.nextElementSibling.textContent) + 1;

        let totalPr =
          Number(productPrice.price) * Number(howManyItems.textContent);

        totalPrice.textContent = totalPr;

        cartIncrement(dataAttri.getAttribute("id"), totalPr);

        totalPrices();
      }
    } else if (e.target.className === "cartDecrement") {
      if (e.target.previousElementSibling.textContent > 0) {
        e.target.previousElementSibling.textContent =
          Number(e.target.previousElementSibling.textContent) - 1;

        let dataAttri = document.getElementById(
          `${e.target.previousElementSibling.getAttribute("data-id")}`
        );

        let productPrice = productsData.find(
          (data) =>
            Number(data.id) === Number(dataAttri.getAttribute("id")) && data
        );

        let totalPrice = e.target.parentElement.previousElementSibling;

        let totalPr =
          Number(e.target.previousElementSibling.textContent) *
          Number(productPrice.price);

        totalPrice.textContent = totalPr;

        cartDecrement(dataAttri.getAttribute("id"), totalPr);

        totalPrices();
      }
    } else if (
      e.target.className === "add-to-cart-button remove-to-cart-button"
    ) {
      removeItemFormLS(e.target.id);
      orderList();
    }
  });

  orderCardBody.innerHTML = localStorageOrder.map(
    (item) => `
    <div id="productCartContainer">
    <div class="cards" id="card3">
    <article class="information [ card ]">
                  <div>
                    <span class="category">${item.category}</span>
                  </div>
                  <div class="imageContainer">
                    <img
                      class="productImage"
                      src=${item.image}
                      alt=""
                    />
                  </div>
  
                  <h2 class="productName">${item.name}</h2>
  
                  <p class="productPrice" id=${item.id}>₹${item.finalPrice}</p>
  
                  <div class="stockElement">
                    <button class="cartIncrement">+</button>
                    <p class="productQuantity" data-quantity="1" data-id=${item.id}>${item.orderItems}</p>
                    <button class="cartDecrement">-</button>
                  </div>

                  <button class="add-to-cart-button remove-to-cart-button" id=${item.id}>
                    Remove
                  </button>
                </article>
              </div>
            </div>
`
  );
};

export { orderList };
