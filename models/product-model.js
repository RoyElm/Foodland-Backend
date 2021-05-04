const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Missing product name."],
            minLength: [2, "Product name must be minimum 2 chars."],
            maxLength: [25, "Product name can't exceed 25 chars."],
            match:[/^([a-zA-Z0-9\u0590-\u05fe]+[_@./#&+-]?\s?)+$/,"Example for pattern Ice Milk Or Ice-Milk"]
        },
        price: {
            type: Number,
            required: [true, "Missing price."],
            min: [0.4, "Price minimum is 0.4."],
            max: [1000, "Price can't exceed 1000."]
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Missing Category Id."],
            ref: "CategoryModel"
        },
        imageName: String,
    },
    {
        versionKey: false,
        id: false
    }
);


const ProductModel = mongoose.model("ProductModel", ProductSchema, "Products");

module.exports = ProductModel;

