const express = require('express');
const router = express.Router();
const matchingController = require('../controllers/matching/matchingController');

router.post('/', matchingController.createMatchingController);
router.put('/:matchingId', matchingController.updateMatchingController);

module.exports = router;
