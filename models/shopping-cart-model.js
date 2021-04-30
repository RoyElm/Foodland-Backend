const mongoose = require("mongoose");

const ShoppingCartSchema = mongoose.Schema(
    {
        cartCreationDate: {
            type: Date,
            required: [true, "Missing cart creation date."],
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Missing user Id."],
            ref: "UserModel"
        },
        open: {
            type: Boolean,
            required: [true, "Missing Cart Status"]
        }
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        id: false
    }
);

ShoppingCartSchema.virtual("cartItems", {
    ref: "CartItemModel",
    localField: "_id",
    foreignField: "shoppingCartId"
});

const ShoppingCartModel = mongoose.model("ShoppingCartModel", ShoppingCartSchema, "ShoppingCarts");

module.exports = ShoppingCartModel;

