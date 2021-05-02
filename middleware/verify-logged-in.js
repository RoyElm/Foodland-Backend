const jwt = require("jsonwebtoken");

// Header: 
function verifyLoggedIn(request, response, next) {

    // If there is no authorization header: 
    if (!request.headers.authorization) {
        return response.status(401).send("You are not logged-in!");
    }

    // Take the token: 
    const token = request.headers.authorization.split(" ")[1];

    // If no value in the token: 
    if (!token) return response.status(401).send("You are not logged-in!");

    // Verify the token: 
    jwt.verify(token, "ShopOnline", (err, payload) => { // payload.user
        if (err && err.message === "jwt expired") {
            return response.status(403).send("Your login session has expired. Please login again.");
        }

        if (err) return response.status(401).send("You are not logged-in!");

        next();
    });
}

module.exports = verifyLoggedIn;