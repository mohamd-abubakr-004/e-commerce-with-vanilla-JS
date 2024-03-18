const totalPrices = () => {

    const productSubTotal = document.getElementById('productSubTotal')
    const productFinalTotal = document.getElementById('productFinalTotal')

    let itemsInLS = JSON.parse(localStorage.getItem('produts'))

    let totalPriceWithoutTx = 0;
    let totalPriceWithTx = 50;

    itemsInLS.forEach(item => {totalPriceWithoutTx += item.finalPrice} )
    itemsInLS.forEach(item => {totalPriceWithTx += item.finalPrice} )
    
    productSubTotal.textContent = Math.floor(totalPriceWithoutTx);
    productFinalTotal.textContent = Math.floor(totalPriceWithTx);

}

Math.floor
export {totalPrices}