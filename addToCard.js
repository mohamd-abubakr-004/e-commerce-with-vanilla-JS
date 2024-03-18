import { localStorageItems } from "./localStorage.js";

const addToCard = (obj) => {
  const idItem = document.querySelector(`#${obj.selectItem}`);
  const allObjItems = {
    ...obj,
    finalPrice: Number(obj.price) * Number(idItem.textContent),
    orderItems: Number(idItem.textContent),
  };
  let locatStorageItems = localStorageItems();
  locatStorageItems.push(allObjItems);

  localStorage.setItem("produts", JSON.stringify(locatStorageItems));

  let totalItems = document.querySelector(".add-to-cart-button");

  totalItems.textContent = JSON.parse(localStorage.getItem("produts")).length;
};

export { addToCard };
