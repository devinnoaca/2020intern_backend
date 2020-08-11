const express = require('express');
const router = express.Router();
const matchingController = require('../controllers/matching/matchingController');

router.post('/', matchingController.createMatching);
router.put('/:matchingId', matchingController.updateMatching);
// router.post('/keyword', matchingController.createMatchingKeyworn);

module.exports = router;
