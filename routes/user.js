const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/userController');
const keywordController = require('../controllers/user/keywordController');
const careerController = require('../controllers/user/careerController');
const matchingController = require('../controllers/user/mathcingController');

// USER
router.get('/inform/:usn', userController.getUsers);
router.put('/inform/:usn', userController.getUpdateUser);

// KEYWORD
router.get('/keyword/:usn', keywordController.getKeywords);

// TOTAL_KEYWORD
router.post('/total-keyword/:usn', keywordController.updateTotalKeywordController);
router.delete('/total-keyword/:usn', keywordController.deleteTotalKeywordController);

// RECOMMEND_KEYWORD
router.post('/reco-keyword/:usn', keywordController.updateRecommendKeywordController);
router.delete('/reco-keyword/:usn', keywordController.deleteRecommendKeywordController);

// CAREER
router.get('/career/:usn', careerController.getUserCareer);

// Matching
router.get('/:userType/matching/:state/:usn', matchingController.getMatchingLists);

module.exports = router;
