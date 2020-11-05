function setCartList(cartList) {
    localStorage.setItem("cartList", JSON.stringify(cartList));
}

function getCartList() {
    return JSON.parse(localStorage.getItem('cartList'));
}

function setItemId(id) {
    localStorage.setItem('itemId', id);
}

function getItemId() {
    return +localStorage.getItem('itemId');
}

module.exports = {
    setCartList,
    getCartList,
    setItemId,
    getItemId,
}