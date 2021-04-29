const express = require("express");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const errorsHelper = require("../helpers/errors-helper");
const categoryLogic = require("../business-logic-layer/categories-logic");

const router = express.Router();

//getting all categories - have to be login
router.get("/", verifyLoggedIn, async (request, response) => {
    try {
        const categories = await categoryLogic.getAllCategoriesAsync();
        response.json(categories);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});


module.exports = router;