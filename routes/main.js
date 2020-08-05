const express = require('express')
const router = express.Router()
const keywordController = require('../controllers/main/keywordController');
const mentorListController = require('../controllers/main/mentorListController');

router.get('/keyword', keywordController.getKeywordList);
router.get('/list', mentorListController.getMentorList);

module.exports = router;
