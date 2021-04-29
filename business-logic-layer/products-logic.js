require("../data-access-layer/dal");
const ProductModel = require("../models/product-model");

//get all products
function getAllProductsAsync() {
    return ProductModel.find().exec();
}

//get total products
function getTotalProductsAsync() {
    return ProductModel.countDocuments().exec();
}

module.exports = {
    getAllProductsAsync,
    getTotalProductsAsync
};
