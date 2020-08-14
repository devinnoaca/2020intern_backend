const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/userController');
const keywordController = require('../controllers/user/keywordController');
const careerController = require('../controllers/user/careerController');
const matchingController = require('../controllers/user/matchingController');

// USER
router.get('/inform', userController.getUserController);
router.put('/inform/:usn', userController.updateUserController);

// KEYWORD
router.get('/keyword/:usn', keywordController.getKeywordController);

// TOTAL_KEYWORD
router.post('/keyword/total/:usn', keywordController.updateTotalKeywordController);

// RECOMMEND_KEYWORD
router.post('/keyword/recommend/:usn', keywordController.updateRecommendKeywordController);

// CAREER
router.get('/career/:usn', careerController.getUserCareerController);
router.post('/career/:usn', careerController.handleUserCareerController);

// Matching
router.get('/:userType/matching/:state/:usn', matchingController.getMatchingListsController);

module.exports = router;
