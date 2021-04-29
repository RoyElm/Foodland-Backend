const express = require("express");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const CartItemModel = require("../models/cart-item-model");
const cartItemLogic = require("../business-logic-layer/cart-items-logic");
const errorsHelper = require("../helpers/errors-helper");

const router = express.Router();

//get shopping cart items by specify shopping cart id; - have to be login
router.get("/:shoppingCartId", verifyLoggedIn, async (request, response) => {
    try {
        const shoppingCartId = request.params.shoppingCartId;
        const cartItems = await cartItemLogic.getAllCartItemByCartIdAsync(shoppingCartId);
        response.json(cartItems);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//adding new cart item; - have to be login
router.post("/", verifyLoggedIn, async (request, response) => {
    try {
        const cartItem = new CartItemModel(request.body);
        const error = cartItem.validateSync();
        if (error) return response.status(400).send(error.message);
        const addedCartItem = await cartItemLogic.addNewCartItemAsync(cartItem);
        if (addedCartItem === 400) return response.status(400).send("Please slow down with the requests");
        response.status(201).json(addedCartItem);
    } catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
})

//deleting cart item by id; -have to be login
router.delete("/:_id", verifyLoggedIn, async (request, response) => {
    try {
        const _id = request.params._id;
        await cartItemLogic.deleteCartItemAsync(_id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//deleting all cart items by shopping cart id; - have to be login
router.delete("/all/:shoppingCartId", verifyLoggedIn, async (request, response) => {
    try {
        const shoppingCartId = request.params.shoppingCartId;
        await cartItemLogic.deleteAllCartItemsAsync(shoppingCartId);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//updating cart item by id - have to be login
router.put("/:_id", verifyLoggedIn, async (request, response) => {
    try {
        const cartItem = new CartItemModel(request.body);
        cartItem._id = request.params._id;
        const error = cartItem.validateSync();
        if (error) return response.status(400).send(error.message);
        const updatedCartItem = await cartItemLogic.updateCartItemAsync(cartItem);
        if (!updatedCartItem) {
            response.status(404).send(`Cart item not found please refresh and try again`);
            return;
        }
        response.json(updatedCartItem);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

module.exports = router;
