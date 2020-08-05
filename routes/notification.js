var express = require('express');
var router = express.Router();
const notificationController = require('../controllers/notification/notificationController');

router.post('/', notificationController.createNotification);

module.exports = router;