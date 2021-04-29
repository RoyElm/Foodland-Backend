const express = require("express");
const authLogic = require("../business-logic-layer/auth-logic");
const errorsHelper = require("../helpers/errors-helper");
const authModel = require("../models/auth-model");
const CredentialModel = require("../models/credentials-model");

const router = express.Router();

//register new user
router.post("/register", async (request, response) => {
    try {
        const newUser = new authModel(request.body);
        const error = newUser.validateSync();
        if (error) return response.status(400).send(error.message);
        const addedUser = await authLogic.registerAsync(newUser);
        if (addedUser?.status) return response.status(401).send(addedUser.error + " Already exist please try another");
        response.status(201).json(addedUser);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//check if idcard exist in DB
router.post("/confirm/idCard", async (request, response) => {
    try {
        const { idCard } = request.body;
        const existUser = await authLogic.findByIdCardAsync(idCard);
        response.json(existUser);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//check if email exist in DB
router.post("/confirm/email", async (request, response) => {
    try {
        let { email } = request.body;
        email = email.toLowerCase();
        const existUser = await authLogic.findByEmailAsync(email);
        response.json(existUser);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//login
router.post("/login", async (request, response) => {
    try {
        const user = new CredentialModel(request.body);
        const error = user.validateSync();
        if (error) return response.status(400).send(error.message);
        const loggedInUser = await authLogic.loginAsync(user);
        if (!loggedInUser) return response.status(401).send("Incorrect email or password.");
        response.json(loggedInUser);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

module.exports = router;