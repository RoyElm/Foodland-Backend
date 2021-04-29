require("../data-access-layer/dal");
const ProductModel = require("../models/product-model");
const CartItemModel = require("../models/cart-item-model");
const cartItemLogic = require("./cart-items-logic");
const socketHelper = require("../helpers/socket-helper");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

// Add new product- Admin only:
async function addProductAsync(product, newImage) {
    const extension = path.extname(newImage.name);
    product.imageName = uuid.v4() + extension;
    await newImage.mv("upload/product-images/" + product.imageName);
    return product.save();
}

// Update product- Admin only:
async function updateProductAsync(product, newImage) {
    if (newImage) {
        const absolutePath = path.join(__dirname, "..", "upload/product-images/", product.imageName);
        if (await fs.existsSync(absolutePath)) {
            await fs.unlinkSync(absolutePath);
        }
        const extension = path.extname(newImage.name);
        product.imageName = uuid.v4() + extension;
        await newImage.mv("upload/product-images/" + product.imageName);
    }
    const info = await ProductModel.updateOne({ _id: product._id }, product).exec();
    if (info.n) {
        getAllCartItemsByProductId(product._id);
        return product;
    }
    return null;
}

async function getAllCartItemsByProductId(productId) {
    const cartItems = await CartItemModel.find({ productId }).populate("product").exec();
    cartItems.forEach(async cartItem => {
        cartItem.totalPrice = cartItem.quantity * cartItem.product.price;
        const updatedCartItem = await cartItemLogic.updateCartItemAsync(cartItem);
        socketHelper.cartItemUpdated(updatedCartItem);
    });
}

module.exports = {
    addProductAsync,
    updateProductAsync,
};
