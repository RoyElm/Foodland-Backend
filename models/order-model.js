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
            min: [0.4, "total Price can't be below 0.4$."],
            max: [100000, "total Price can't exceed 100000$."]
        },
        cityToDeliver: {
            type: String,
            required: [true, "Missing city to deliver."],
            minLength: [2, "City to deliver minimum length is 2."],
            maxLength: [30, "City to deliver maximum length is 30."],
        },
        addressToDeliver: {
            type: String,
            required: [true, "Missing address to deliver."],
            minLength: [2, "address to deliver minimum length is 2."],
            maxLength: [25, "address to deliver maximum length is 25."],
            match: [/^(([a-zA-Z\u0590-\u05fe]{2,}\s?)+([a-zA-Z0-9\u0590-\u05fe]+\s?)?)+$/, "You can't start with space or you used double spaces"]
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
            minLength: [4, "Last Four Digit maximum length is 4."],
            maxLength: [4, "Last Four Digit maximum length is 4."]
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

