const io = require("socket.io");

let socketServer;

function init(expressListener) {
    socketServer = io(expressListener, { cors: { origin: "*" } });
    socketServer.sockets.on("connection", socket => {
        console.log("Client Connected. Total clients: ", socketServer.engine.clientsCount);
        socket.on("disconnect", () => console.log("Client Disconnected. Total clients: ", socketServer.engine.clientsCount ? socketServer.engine.clientsCount - 1 : socketServer.engine.clientsCount));
    });
}

function productAdded(addedProduct) {
    socketServer.sockets.emit("msg-from-server-product-added", addedProduct);
}

function productUpdated(updatedProduct) {
    socketServer.sockets.emit("msg-from-server-product-updated", updatedProduct);
}

function cartItemUpdated(updatedCartItem) {
    socketServer.sockets.emit("msg-from-server-cart-item-updated", updatedCartItem);
}

module.exports = {
    init,
    productAdded,
    productUpdated,
    cartItemUpdated
};
