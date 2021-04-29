require("../data-access-layer/dal");
const shoppingModel = require("../models/shopping-cart-model");

//get shopping cart by user id
function getCartByUserIdAsync(userId) {
    return shoppingModel.findOne({ userId }, null, { sort: { cartCreationDate: -1 } }).exec();
}

//add new shopping cart
function addShoppingCartAsync(shoppingCart) {
    return shoppingCart.save();
}

//close shopping cart after order
async function closeShoppingCartAsync(shoppingCart) {
    const info = await shoppingModel.updateOne({ _id: shoppingCart._id }, shoppingCart).exec();
    return info.n ? shoppingCart : null;
}


module.exports = {
    getCartByUserIdAsync,
    addShoppingCartAsync,
    closeShoppingCartAsync
}