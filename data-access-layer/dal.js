const mongoose = require("mongoose");

//handling connect to MongoDB Database
function connectAsync() {
    return new Promise((resolve, reject) => {
        const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };
        mongoose.connect(config.mongodb.connectionString, options, (err, db) => {
            if (err) return reject(err);
            resolve(db);
        });
    });
}

(async () => {
    try {
        await connectAsync()
    }
    catch (err) {
        console.log(err);
    }
})();