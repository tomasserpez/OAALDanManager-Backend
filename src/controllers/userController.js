// import User from "../models/users";
// const jwt = require('jsonwebtoken');
const User = require('../models/users');

exports.createUser = async (req,res) =>{
    try{
        const {username,email,password} = req.body;
        
        const user = new User({
            username,
            email,
            password,
        });

        user.password = await User.encryptPassword(user.password);

        const savedUser = await user.save();

        return res.status(200).json({
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
        });
    }catch(error){
        console.error(error);
    }
};

exports.getUsers = async (req,res) => {
    const users = await User.find();
    return res.json(users);
}

exports.getUser = async (req,res) => {
    const user = await User.findById(req.params.userId);
    return res.json(user);
};