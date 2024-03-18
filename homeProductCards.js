import { addToCard } from "./addToCard.js";

const productsList = (products) => {
  let productContainer = document.getElementById("productContainer");

  productContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    if (e.target.classList[0] == "cartIncrement") {
      if (
        (e.target.nextElementSibling.textContent == 0) |
        (e.target.nextElementSibling.textContent > 0)
      ) {
        let stock =
          e.target.parentElement.parentElement.previousElementSibling
            .children[1].textContent;
        if (Number(e.target.nextElementSibling.textContent) < stock) {
          e.target.nextElementSibling.textContent = ++e.target
            .nextElementSibling.textContent;
        }
      }
    } else if (e.target.classList[0] == "cartDecrement") {
      if (e.target.previousElementSibling.textContent > 0) {
        e.target.previousElementSibling.textContent = --e.target
          .previousElementSibling.textContent;
      }
    }

    if (e.target.classList[0] == "add-to-cart-button") {
      products.forEach((element) => {
        if (Number(element.id) === Number(e.target.parentElement.id)) {
          console.log("fine");
          addToCard(element);
        }
      });
    }
  })

  if (products) {
    productContainer.innerHTML = products.map(
      (product) => `
        <div class="cards" id=${product.cardId}>
          <article class="information [ card ]" id=${product.id}>
            <span class="category">${product.category}</span>
            <div class="imageContainer">
              <img class="productImage" src=${product.image} alt=${product.name} />
            </div>

            <h2 class="productName">${product.name}</h2>
            <div class="productRating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="productDescription">${product.description}</p>
            <p class="productPrice"></p>
            <div class="productPriceElement">
              <p class="productPrice">₹${product.price}</p>
              <p class="productActualPrice">₹1999</p>
            </div>

            <div class="productStockElement">
              <p class="productProperty">Total Stocks Available:</p>
              <p class="productStock">${product.stock}</p>
            </div>

            <div class="productQuantityElement">
              <p class="productProperty">Quantity(Pieces)</p>
              <div class="stockElement">
                <button class="cartIncrement">+</button>
                <p class="productQuantity" id=${product.selectItem}>1</p>
                <button class="cartDecrement">-</button>
              </div>
            </div>

            <button class="add-to-cart-button">
              <i class="fa-solid fa-cart-shopping"></i> Add To Cart
            </button>
          </article>
        </div>
    `
    );
  };
};

export { productsList };
