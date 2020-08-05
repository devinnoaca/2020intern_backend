const express = require('express');
const router = express.Router();
const matchingController = require('../controllers/matching/matchingController');

router.post('/', matchingController.createMatching);
router.put('/:matching_id', matchingController.updateMatching);
router.post('/keyword', matchingController.createMatchingKeyword);

module.exports = router;