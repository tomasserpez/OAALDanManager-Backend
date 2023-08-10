// import User from "../models/users";
const User = require('../models/users');

exports.checkExistingUser = async (req,res,next)=>{
    try{
        const userFound = await User.findOne({
            username: req.body.username
        });
        if(userFound){
            return res.status(400).json({
                message: "El usuario ya existe..."
            });
        }
        const email = await User.findOne({
            email: req.body.email
        });
        if(email){
            return res.status(400).json({
                message: "El email ya existe..."
            });
        }

        next();
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

