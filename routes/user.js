const express = require('express');
const getUsers  = require('../controller/UserController');
const router = express.Router();

router.get('/:usn/inform', getUsers.doGetUser);
router.get('/:usn/career', getUsers.doGetCareer);
router.get('/:usn/totalkeyword', getUsers.doGetTotalKeyword);
router.get('/:usn/recommendkeyword', getUsers.doGetRecommendKeyword);

module.exports = router;