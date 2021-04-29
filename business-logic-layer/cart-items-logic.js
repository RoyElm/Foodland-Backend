require("../data-access-layer/dal");
const CartItemModel = require("../models/cart-item-model");

//get all cart items by cart id
function getAllCartItemByCartIdAsync(shoppingCartId) {
    return CartItemModel.find({ shoppingCartId }).populate("product").exec();
}

//add new cart item 
function addNewCartItemAsync(cartItem) {
    return cartItem.save();
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
    getAllCartItemByCartIdAsync,
    deleteCartItemAsync,
    updateCartItemAsync,
    deleteAllCartItemsAsync
}