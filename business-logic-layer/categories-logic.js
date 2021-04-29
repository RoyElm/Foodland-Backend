require("../data-access-layer/dal");
const categoryModel = require("../models/category-model");

//get all categories
function getAllCategoriesAsync() {
    return categoryModel.find().exec();
}

module.exports = {
    getAllCategoriesAsync
}