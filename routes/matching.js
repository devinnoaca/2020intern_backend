var express = require('express');
var router = express.Router();
const matchingController = require('../controllers/matching/matchingController');

router.post('/', matchingController.createMatching);

module.exports = router;