const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth/authController');

router.post('/', authController.signUpController);

module.exports = router;
