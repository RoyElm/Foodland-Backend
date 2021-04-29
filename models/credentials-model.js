const mongoose = require("mongoose");

const CredentialSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Missing email."],
            pattern: [true, /^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/]
        },
        password: {
            type: String,
            select: false,
            required: [true, "Missing password."]
        }
    },
    {
        versionKey: false,
        id: false
    }
);

const CredentialModel = mongoose.model("CredentialModel", CredentialSchema, "Users");

module.exports = CredentialModel;
