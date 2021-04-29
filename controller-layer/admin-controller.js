const express = require("express");
const adminLogic = require("../business-logic-layer/admin-logic");
const ProductModel = require("../models/product-model");
const verifyAdmin = require("../middleware/verify-admin");
const errorsHelper = require("../helpers/errors-helper");
const socketHelper = require("../helpers/socket-helper");
const router = express.Router();

//add product admin only- using socket io
router.post("/add-product/", verifyAdmin, async (request, response) => {
    try {
        const product = new ProductModel(request.body);
        const errors = product.validateSync();
        if (errors)
            return response.status(400).send(errors.message);

        const addedProduct = await adminLogic.addProductAsync(product, request.files.newImage);
        response.status(201).json(addedProduct);
        socketHelper.productAdded(addedProduct);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//update product admin only - using socket io 
router.put("/update-product/:_id", verifyAdmin, async (request, response) => {
    try {
        const product = new ProductModel(request.body);
        product._id = request.params._id;
        const updatedProduct = await adminLogic.updateProductAsync(product, request.files ? request.files.newImage : null);
        if (!updatedProduct)
            return response.status(404).send(`Product not found please try again.`);
        response.json(updatedProduct);
        socketHelper.productUpdated(updatedProduct);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});


module.exports = router;