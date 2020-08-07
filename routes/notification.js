const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification/notificationController');

router.post('/', notificationController.createNotificationController);
router.post('/user', notificationController.createUserNotificationController);

module.exports = router;