const express = require('express');
const router = express.Router();
const getUser = require('../Controller/getUser')
const getKeyword = require('../Controller/getKeyword')

router.get('/:usn/inform', getUser.getUserInform);
router.get('/:usn/keyword', getKeyword.getKeyword);


module.exports = router;