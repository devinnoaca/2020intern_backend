var express = require('express')
var router = express.Router()
const userController = require('../controllers/userController');
const keywordController = require('../controllers/keywordController');


// USER
router.get('/:usn/inform', userController.getUsers);
router.put('/:usn/inform');
router.delete('/:usn/inform');

// KEYWORD
router.get('/:usn/keyword', keywordController.getKeywords);
router.put('/:usn/keyword');
router.delete('/:usn/keyword');


module.exports = router