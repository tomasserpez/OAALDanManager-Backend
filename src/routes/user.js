// import { Router } from "express";
// import { createUser } from "../controllers/userController";
// import { verifyToken} from "../middleware/authJwt";
// import { checkExistingUser } from "../middleware/verifySignup";
const userController = require('../controllers/userController');
const authJwt = require('../middleware/authJwt');
const verifySignup = require('../middleware/verifySignup');
const express = require('express');
const router = express.Router();

router.post("/", authJwt.verifyToken, verifySignup.checkExistingUser, userController.createUser);

module.exports = router;