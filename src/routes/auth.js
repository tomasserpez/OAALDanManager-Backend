const authController = require('../controllers/authController');
const verifySignup = require('../middleware/verifySignup');
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Header",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post("/signup", verifySignup.checkExistingUser, authController.signupHandler);

router.post("/signin", authController.signinHandler);

module.exports = router;