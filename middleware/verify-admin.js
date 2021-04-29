const jwt = require("jsonwebtoken");

// Header: 
// authorization: "Bearer the-token"
function verifyAdmin(request, response, next) {

    // If there is no authorization header: 
    if (!request.headers.authorization) {
        return response.status(401).send("You are not logged-in!");
    }

    // Take the token: 
    const token = request.headers.authorization.split(" ")[1];

    // If no value in the token: 
    if (!token) {
        return response.status(401).send("You are not logged-in!");
    }

    // Verify the token: 
    jwt.verify(token, "ShopOnline", (err, payload) => { // payload.user

        if (err && err.message === "jwt expired") {
            return response.status(403).send("Your login session has expired. Please login again.");
        }

        if (err) {
            return response.status(401).send("You are not logged-in!");
        }

        if (payload.user[0].role !== "Admin-Role") {
            return response.status(403).send("You are not admin!");
        }

        next();
    });
}

module.exports = verifyAdmin;