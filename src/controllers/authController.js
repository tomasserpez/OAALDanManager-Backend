// import jwt from "jsonwebtoken";
// import User from "../models/users";
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const dotenv = require('dotenv');
dotenv.config();

exports.signupHandler = async (req,res) => {
    try{
        const {username, email, password } = req.body;

        // Crear usuario
        const newUser = new User({
            username,
            email,
            password
        });

        const savedUser = await newUser.save();

        // Crear token
        const token = jwt.sign({
            id: savedUser._id
        },  process.env.SECRET, {
            expiresIn: 86400
        });

        return res.status(200).json({
            token
        });
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    };
};

exports.signinHandler = async (req, res) => {
    try{
        //usuario o mail
        const userFound = await User.findOne({
            email: req.body.email
        });

        if(!userFound){
            return res.status(400).json({
                message: 'Usuario no encontrado.'
            });
        };

        const matchPassword = await User.comparePassword(req.body.password, userFound.password);

        if(!matchPassword){
            return res.status(401).json({
                token: null,
                message: "Contraseña o usuario invalido",
            });
        }
        const token = jwt.sign({
            id: userFound._id
        }, process.env.SECRET, {
            expiresIn: 86400,
        });

        res.json({
            token
        });
    }catch(error){
        console.log(error);
    }
}
