const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification/notificationController');

router.get('/:usn/:type', notificationController.getUserNotificationController);

router.post('/', notificationController.createNotificationController);
router.post('/user', notificationController.createUserNotificationController);

module.exports = router;
