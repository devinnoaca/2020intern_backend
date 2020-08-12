const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth/authController');

// SIGN UP
router.post('/', authController.signUpController);

// SIGN IN
router.post('/login', authController.signInController);

module.exports = router;
