const localStorageItems = () => {
  let localStorageItems = localStorage.getItem("produts");
  if (!localStorageItems) {
    return []
  }
  localStorageItems = JSON.parse(localStorageItems);

  return localStorageItems;
};

export { localStorageItems };