var express = require('express')
var router = express.Router()
const keywordController = require('../controllers/keywordController');

router.get('/', keywordController.getAllKeywords);

module.exports = router;
