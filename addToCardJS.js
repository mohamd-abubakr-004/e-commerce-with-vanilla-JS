import { orderList } from "./OrderCard.js";

const AddItemsNo = () => {
  let totalItems = document.querySelector(".add-to-cart-button");
  console.log(totalItems);

  totalItems.textContent = JSON.parse(localStorage.getItem("produts")).length;

  orderList();
};

AddItemsNo()

export { AddItemsNo };