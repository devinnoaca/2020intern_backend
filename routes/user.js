const express = require('express');
const router = express.Router();
const getUsers  = require('../controller/UserController');

router.get('/:usn/inform', getUsers.doGetUser);
router.get('/:usn/career', getUsers.doGetCareer);
router.get('/:usn/totalkeyword', getUsers.doGetTotalKeyword);
router.get('/:usn/recommendkeyword', getUsers.doGetRecommendKeyword);

module.exports = router;