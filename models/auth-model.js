const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Missing first name."],
        minLength: [2, "first name must be minimum 2 chars."],
        maxLength: [50, "first name can't exceed 50 chars."]
    },
    lastName: {
        type: String,
        required: [true, "Missing last name."],
        minLength: [2, "last name must be minimum 2 chars."],
        maxLength: [50, "last name can't exceed 50 chars."]
    },
    email: {
        type: String,
        required: [true, "Missing email."],
        unique: [true, "Email already exist"],
        pattern: [true, /^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/]
    },
    idCard: {
        type: String,
        required: [true, "Missing id card."],
        unique: [true, "idCard already exist"],
        match: [/^\d{9}$/, "Id card need to have 9 digits."]
    },
    city: {
        type: String,
        required: [true, "Missing city."],
        minLength: [2, "City must be minimum 2 chars."],
        maxLength: [50, "City can't exceed 50 chars."]
    },
    address: {
        type: String,
        required: [true, "Missing address."],
        minLength: [2, "Address must be minimum 2 chars."],
        maxLength: [50, "Address can't exceed 50 chars."]
    },
    password: {
        type: String,
        select: false,
        required: [true, "Missing password."]
    },
    role: {
        type: String,
        required: false,
        default: "0"
    },
    token: {
        type: String,
        required: false
    }
},
    {
        versionKey: false,
        id: false
    });

const AuthModel = mongoose.model("AuthModel", AuthSchema, "Users");

module.exports = AuthModel;
