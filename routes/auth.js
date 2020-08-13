const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth/authController');

// SIGN UP
router.post('/', authController.signUpController);

// SIGN IN
router.get('/login', authController.getSignInController);
router.post('/login', authController.signInController);
router.get('/logout', authController.signOutController);

module.exports = router;
