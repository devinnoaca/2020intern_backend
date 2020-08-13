const express = require('express');
const router = express.Router();
const keywordController = require('../controllers/main/keywordController');
const mentorListController = require('../controllers/main/mentorListController');

router.get('/keyword', keywordController.getKeywordListController);
router.post('/page', mentorListController.getMentorListPageController);
router.post('/list', mentorListController.getMentorListController);

module.exports = router;
