import { AddItemsNo } from "./addToCardJS.js";

const cartIncrement = (id, totalPr) => {
  let data = JSON.parse(localStorage.getItem("produts"));

  let filterData = data.map((item) => {
    if (Number(item.id) === Number(id)) {
      return {
        ...item,
        finalPrice: Number(totalPr),
        orderItems: ++item.orderItems,
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("produts", JSON.stringify(filterData));
};

const cartDecrement = (id, totalPr) => {
  let data = JSON.parse(localStorage.getItem("produts"));

  let filterData = data.map((item) => {
    if (Number(item.id) === Number(id)) {
      return {
        ...item,
        finalPrice: Number(totalPr),
        orderItems: --item.orderItems,
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("produts", JSON.stringify(filterData));

};

const removeItemFormLS = (id) => {

  // Step 1: Retrieve the array from local storage
let array = JSON.parse(localStorage.getItem('produts'));

// Step 2: Remove the item
let filterData = array.filter(item => Number(item.id) !== Number(id) && item)

// Step 3: Store the array back to local storage
localStorage.setItem('produts', JSON.stringify(filterData));

AddItemsNo()

};

export { cartDecrement, cartIncrement, removeItemFormLS };
