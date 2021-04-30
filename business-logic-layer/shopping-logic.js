require("../data-access-layer/dal");
const shoppingModel = require("../models/shopping-cart-model");

//get shopping cart by user id with cart-items (cart-items populating with the product).
function getCartByUserIdAsync(userId) {
    return shoppingModel.findOne({ userId }, null, { sort: { cartCreationDate: -1 } })
        .populate({
            path: "cartItems",
            populate: {
                path: "product"
            }
        }).exec();
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