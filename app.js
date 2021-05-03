global.config = require(process.env.NODE_ENV === "production" ? "./env/config-prod.json" : "./env/config-dev.json");
const express = require("express");
const authController = require("./controller-layer/auth-controller");
const adminController = require("./controller-layer/admin-controller");
const productsController = require("./controller-layer/products-controller");
const categoriesController = require("./controller-layer/categories-controller");
const orderController = require("./controller-layer/order-controller");
const shoppingController = require("./controller-layer/shopping-cart-controller");
const cartItemsController = require("./controller-layer/cart-items-controller");
const fileUpload = require("express-fileupload");
const socketHelper = require("./helpers/socket-helper");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const server = express();

// Enable sending an receiving cookies from the front:
server.use(cookieParser());

//Enabling cors to access from all ip address, allowing json as response and allowing file uploading.
server.use(cors())
server.use(express.json());
server.use(fileUpload());

server.use(express.static(path.join(__dirname, "./frontend")));

//ExpressJS Routes to controllers.
server.use("/api/auth", authController);
server.use("/api/admin", adminController);
server.use("/api/products", productsController);
server.use("/api/categories", categoriesController);
server.use("/api/order", orderController);
server.use("/api/shopping-cart", shoppingController);
server.use("/api/cart-items", cartItemsController);

server.use("*", (request, response) => {
    response.sendFile(path.join(__dirname, "./frontend/index.html"))
});

//listening to environment Port on production or 3001 on developing;
const port = process.env.PORT || 3001;
const expressListener = server.listen(port, () => console.log("Listening...."));

//connecting to socket.
socketHelper.init(expressListener);