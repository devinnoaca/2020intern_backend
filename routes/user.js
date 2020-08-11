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
router.post('/keyword/total/:usn', keywordController.updateTotalKeywordController);


// RECOMMEND_KEYWORD
router.post('/keyword/recommend/:usn', keywordController.updateRecommendKeywordController);


// CAREER
router.get('/career/:usn', careerController.getUserCareer);
router.post('/career/:usn', careerController.handleUserCareer);

// Matching
router.get('/:userType/matching/:state/:usn', matchingController.getMatchingLists);

module.exports = router;
