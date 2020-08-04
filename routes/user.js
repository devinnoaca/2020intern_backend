var express = require('express')
var router = express.Router()
const userController = require('../controllers/user/userController');
const keywordController = require('../controllers/user/keywordController');
const careerController = require('../controllers/user/careerController');

// USER
router.get('/:usn/inform', userController.getUsers);
router.put('/:usn/inform');

// KEYWORD
router.get('/:usn/keyword', keywordController.getKeywords);
router.put('/:usn/keyword');
router.delete('/:usn/keyword');

// CAREER
router.get('/:usn/career', careerController.getUserCareer);

module.exports = router
