// import jwt from "jsonwebtoken";
// import User from "../models/users";
const jwt = require('jsonwebtoken');
const User = require('../models/users');

const dotenv = require('dotenv');
dotenv.config();

exports.verifyToken = async ( req, res, next) => {
    const token = req.headers["x-access-token"];

    if(!token) return res.status(403).json({ message: "No se dió un token."});

    try{
        const decoded = jwt.verify(token,  process.env.SECRET);
        req.userId = decoded.id;
        const user = await User.findById(req.userId, {password: 0});
        if(!user) return res.status(404).json({message: "No se encontró usuario."});
        next();
    }catch(error){
        return res.status(401).json({ message: "No Autorizado..."});
    }
};

