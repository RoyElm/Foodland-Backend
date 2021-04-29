const mongoose = require("mongoose");

const CredentialSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Missing email."],
            match: [/^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/,"Email isn't in the right syntax"]
        },
        password: {
            type: String,
            select: false,
            minLength:[6,"Minimum password length is 6"],
            match:[/^\S*$/,"You can't use spaces in password"]
        }
    },
    {
        versionKey: false,
        id: false
    }
);

const CredentialModel = mongoose.model("CredentialModel", CredentialSchema, "Users");

module.exports = CredentialModel;
