require("../data-access-layer/dal");
const CartItemModel = require("../models/cart-item-model");

//add new cart item 
async function addNewCartItemAsync(cartItem) {
    const checkIfCartItemExist = await getCartItemByProductIdAsync(cartItem);
    if (checkIfCartItemExist) return 400;
    return cartItem.save();
}

function getCartItemByProductIdAsync({ productId, shoppingCartId }) {
    return CartItemModel.findOne({ $and: [{ productId }, { shoppingCartId }] }).exec();
}

//delete cart item 
function deleteCartItemAsync(_id) {
    return CartItemModel.deleteOne({ _id }).exec();
}

//clear all cart items by shopping cart id
function deleteAllCartItemsAsync(shoppingCartId) {
    return CartItemModel.deleteMany({ shoppingCartId }).exec();
}

//Update specify cart item.
async function updateCartItemAsync(cartItem) {
    const info = await CartItemModel.updateOne({ _id: cartItem._id }, cartItem).exec();
    return info.n ? cartItem : null;
}

module.exports = {
    addNewCartItemAsync,
    deleteCartItemAsync,
    updateCartItemAsync,
    deleteAllCartItemsAsync
}