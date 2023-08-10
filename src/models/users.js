// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: false,
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timeStamps: true,
        versionKey: false,
    }
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.getSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword);
};

userSchema.pre("save", async function (next){
    const user = this;
    if(!user.isModified("password")){
        return next();
    }
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;