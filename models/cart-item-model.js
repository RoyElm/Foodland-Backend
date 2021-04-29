const mongoose = require("mongoose");

const CartItemSchema = mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Missing Product Id."],
            ref: "ProductModel"
        },
        quantity: {
            type: Number,
            required: [true, "Missing Quantity."],
            min: [0, "Quantity can't be negative."],
            max: [1000, "Quantity can't exceed 1000."]
        },
        totalPrice: {
            type: Number,
            required: [true, "Missing total price."],
            min: [0, "total Price can't be negative."],
            max: [100000, "total Price can't exceed 100000."]
        },
        shoppingCartId: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Missing Shopping Cart Id."],
            ref: "ShoppingCartModel"
        }
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        id: false
    }
);

CartItemSchema.virtual("product", {
    ref: "ProductModel",
    localField: "productId",
    foreignField: "_id",
    justOne: true
});

const CartItemModel = mongoose.model("CartItemModel", CartItemSchema, "CartItems");

module.exports = CartItemModel;

