const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Missing first name."],
        minLength: [2, "first name must be minimum 2 chars."],
        maxLength: [30, "first name can't exceed 30 chars."],
        match: [/^([a-zA-Z\u0590-\u05fe]{2,}\s?)+$$/,"Name isn't right please follow the syntax for example: Ugi"]
    },
    lastName: {
        type: String,
        required: [true, "Missing last name."],
        minLength: [2, "last name must be minimum 2 chars."],
        maxLength: [30, "last name can't exceed 30 chars."],
        match: [/^([a-zA-Z\u0590-\u05fe]{2,}\s?)+$$/,"Last name isn't right please follow the syntax for example: Fletzet"]
    },
    email: {
        type: String,
        required: [true, "Missing email."],
        unique: [true, "Email already exist"],
        match: [/^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/, "Email isn't in the right syntax"]
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
        maxLength: [30, "City can't exceed 30 chars."]
    },
    address: {
        type: String,
        required: [true, "Missing address."],
        minLength: [2, "Address must be minimum 2 chars."],
        maxLength: [25, "Address can't exceed 25 chars."],
        match: [/^(([a-zA-Z\u0590-\u05fe]{2,}\s?)+([a-zA-Z0-9\u0590-\u05fe]+\s?)?)+$/, "Address is not in the right pattern"]

    },
    password: {
        type: String,
        select: false,
        required: [true, "Missing password."],
        minLength: [6, "Minimum password length is 6"],
        match: [/^\S*$/, "You can't use spaces in password"]
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
