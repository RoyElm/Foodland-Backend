const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Missing product name."],
            minLength: [2, "Product name must be minimum 2 chars."],
            maxLength: [25, "Product name can't exceed 25 chars."],
            validate: {
                validator: value => value.indexOf("  ") === -1,
                message: "Name can't contain multiple spaces."
            }
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
        toJSON: { virtuals: true },
        id: false
    }
);


const ProductModel = mongoose.model("ProductModel", ProductSchema, "Products");

module.exports = ProductModel;

