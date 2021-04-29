const express = require("express");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const errorsHelper = require("../helpers/errors-helper");
const productsLogic = require("../business-logic-layer/products-logic");
const path = require("path");

const router = express.Router();

//get all products: have to be login
router.get("/", verifyLoggedIn, async (request, response) => {
    try {
        const products = await productsLogic.getAllProductsAsync();
        response.json(products);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));

    }
});

// get count of products: have to be login
router.get("/totalProduct", async (request, response) => {
    try {
        const totalProduct = await productsLogic.getTotalProductsAsync();
        response.json(totalProduct);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//getting product images
router.get("/productImages/:imageName", (request, response) => {
    try {
        const imageName = request.params.imageName;
        const absolutePath = path.join(__dirname, "..", "upload/product-images", imageName);
        response.sendFile(absolutePath);
    } catch (error) {
        response.status(500).send(errorsHelper.getError(err));
    }
})


module.exports = router;