const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/userController');
const keywordController = require('../controllers/user/keywordController');
const careerController = require('../controllers/user/careerController');
const matchingController = require('../controllers/user/mathcingController');

// USER
router.get('/:usn/inform', userController.getUsers);
router.put('/:usn/inform', userController.getUpdateUser);

// KEYWORD
router.get('/:usn/keyword', keywordController.getKeywords);

// TOTAL_KEYWORD
router.post('/:usn/keyword', keywordController.updateTotalKeywordController);
router.delete('/:usn/keyword', keywordController.deleteTotalKeywordController);

// RECOMMEND_KEYWORD

// CAREER
router.get('/:usn/career', careerController.getUserCareer);

// Matching
router.get('/:usn/:userType/matching/:state', matchingController.getMatchingLists);

module.exports = router;
