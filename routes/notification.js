const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification/notificationController');

router.post('/', notificationController.createNotification);

module.exports = router;