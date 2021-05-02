const express = require("express");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const orderLogic = require("../business-logic-layer/order-logic");
const errorsHelper = require("../helpers/errors-helper");
const orderModel = require("../models/order-model");
const { createInvoice } = require("../helpers/pdf-helper");

const router = express.Router();

//get all orders -have to be login
router.get("/", verifyLoggedIn, async (request, response) => {
    try {
        const orders = await orderLogic.getAllOrdersAsync();
        response.json(orders);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//get count of orders; 
router.get("/totalOrders", async (request, response) => {
    try {
        const totalOrders = await orderLogic.getTotalOrdersAsync();
        response.json(totalOrders);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//adding new order; - have to be login
router.post("/", verifyLoggedIn, async (request, response) => {
    try {
        const order = new orderModel(request.body);
        const error = order.validateSync();
        if (error) return response.status(400).send(error.message);
        const ordered = await orderLogic.saveOrderAsync(order);
        response.status(201).json(ordered);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

//downloading receipt by order id -  have to be login
router.get('/receipt/:_id', verifyLoggedIn, async function (request, response) {
    try {
        const _id = request.params._id;
        const order = await orderLogic.getReceiptByOrderIdAsync(_id);
        //creating Document PDF
        const doc = await createInvoice(order, `${order._id}.pdf`);

        //downloading the created pdf
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            let pdfData = Buffer.concat(buffers);
            response.writeHead(200, {
                'Content-Length': Buffer.byteLength(pdfData),
                'Content-Type': 'application/pdf',
                'Content-disposition': `attachment;filename=${order.user.firstName}.pdf`,
            })
                .end(pdfData);
        });

        doc.end();
    } catch (error) {
        response.status(500).send(errorsHelper.getError(error));
    }
});

module.exports = router;
