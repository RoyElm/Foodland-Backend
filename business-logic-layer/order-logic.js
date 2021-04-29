require("../data-access-layer/dal");
const orderModel = require("../models/order-model");

//get total orders
function getTotalOrdersAsync() {
    return orderModel.countDocuments().exec();
}

//get all orders
function getAllOrdersAsync() {
    return orderModel.find().exec();
}

//add new order
function saveOrderAsync(order) {
    return order.save();
}

//get receipt by order id
function getReceiptByOrderIdAsync(_id) {
    return orderModel.findById(_id).populate("user").populate({
        path: "shoppingCartItems",
        populate: {
            path: "product"
        }
    }).exec();
}

module.exports = {
    getTotalOrdersAsync,
    saveOrderAsync,
    getReceiptByOrderIdAsync,
    getAllOrdersAsync
}