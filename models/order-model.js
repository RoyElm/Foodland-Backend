const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "UserModel"
        },
        shoppingCartId: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Missing shopping Cart Id."],
            ref: "ShoppingCartModel"
        },
        totalPrice: {
            type: Number,
            required: [true, "Missing total price."],
            min: [0, "total Price can't be negative."],
            max: [100000, "total Price can't exceed 100000."]
        },
        cityToDeliver: {
            type: String,
            required: [true, "Missing city to deliver."],
            minLength: [2, "City to deliver minimum length is 2."],
            maxLength: [50, "City to deliver maximum length is 50."],
        },
        addressToDeliver: {
            type: String,
            required: [true, "Missing address to deliver."],
            minLength: [2, "address to deliver minimum length is 2."],
            maxLength: [50, "address to deliver maximum length is 50."],
        },
        dateToDeliver: {
            type: Date,
            required: [true, "Missing date to deliver."]
        },
        orderDate: {
            type: Date,
            required: [true, "Missing order date."]
        },
        lastFourDigit: {
            type: String,
            required: [true, "Missing last Four Digit."],
            minLength: [4, "last Four Digit minimum/maximum length is 4."],
        },

    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        id: false
    }
);

OrderSchema.virtual("user", {
    ref: "AuthModel",
    localField: "userId",
    foreignField: "_id",
    justOne: true
});

OrderSchema.virtual("shoppingCartItems", {
    ref: "CartItemModel",
    localField: "shoppingCartId",
    foreignField: "shoppingCartId"
});

const OrderModel = mongoose.model("OrderModel", OrderSchema, "Orders");

module.exports = OrderModel;

