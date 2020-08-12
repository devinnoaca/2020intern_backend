const express = require('express');
const router = express.Router();
const keywordController = require('../controllers/main/keywordController');
const mentorListController = require('../controllers/main/mentorListController');

router.get('/keyword', keywordController.getKeywordListController);
router.post('/page', mentorListController.getMentorListPageController); // 처음에 전체 검색 결과의 수
router.post('/list', mentorListController.getMentorListController);  // 멘토의 리스트를 페이지마다 줌
module.exports = router;
