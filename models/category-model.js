const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: [true, "Missing Category Name."],
            minLength: [2, "Category Name must be minimum 2 chars."],
            maxLength: [50, "Category Name can't exceed 50 chars."]
        }
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        id: false
    }
);


const CategoryModel = mongoose.model("CategoryModel", CategorySchema, "Categories");

module.exports = CategoryModel;
