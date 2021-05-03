const express = require("express");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const shoppingLogic = require("../business-logic-layer/shopping-cart-logic");
const shoppingCartModel = require("../models/shopping-cart-model");
const errorsHelper = require("../helpers/errors-helper");

const router = express.Router();

//getting shopping cart by user id; have to be login;
router.get("/:userId", verifyLoggedIn, async (request, response) => {
    try {
        const userId = request.params.userId;
        const cart = await shoppingLogic.getCartByUserIdAsync(userId);
        response.json(cart);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//adding new shopping cart - have to be login;
router.post("/", verifyLoggedIn, async (request, response) => {
    try {
        const shoppingCart = new shoppingCartModel(request.body);
        const error = shoppingCart.validateSync();
        if (error) return response.status(400).send(error.message);
        const addedShoppingCart = await shoppingLogic.addShoppingCartAsync(shoppingCart);
        response.json(addedShoppingCart);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//closing shopping cart by id - have to be login;
router.put("/close/:_id", verifyLoggedIn, async (request, response) => {
    try {
        const shoppingCart = new shoppingCartModel(request.body);
        shoppingCart._id = request.params._id;
        const updatedShoppingCart = await shoppingLogic.closeShoppingCartAsync(shoppingCart);
        if (!updatedShoppingCart)
            return response.status(404).send(`Shopping cart not found please try again.`);
        response.json(updatedShoppingCart);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});


module.exports = router;
