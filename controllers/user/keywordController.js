const keywordDAO = require('../../models/user/keywordDAO');
const userKeyword = require('../lib/user_keyword');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');

const getKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);

  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn])) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  let reqDataObject = lib.createReqDataObject(req.params, req.body);
  try {
    let totalResult = await keywordDAO.getTotalKeywordDAO(reqDataObject);
    let recommendResult = await keywordDAO.getRecommendKeywordDAO(reqDataObject);
    let keywordResult = userKeyword.userKeywordLogic(usn, totalResult, recommendResult);
    return res.status(200).send(keywordResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateTotalKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword = req.body.keyword;
  let insertKeywords = req.body.keyword.insertKeywords;
  let deleteKeywords = req.body.keyword.deleteKeywords;
  let state = "total";

  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, keyword])) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }

  try {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    let resultData = await userKeyword.checkKeywordLogic(reqDataObject, insertKeywords, deleteKeywords, state);
    return res.status(200).send(resultData);
  } catch (err) {
    return res.status(501).json(err);
  }
}

const updateRecommendKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword = req.body.keyword;
  let insertKeywords = req.body.keyword.insertKeywords;
  let deleteKeywords = req.body.keyword.deleteKeywords;
  let state = "recommend";

  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, keyword])) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }

  try {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    let resultData = await userKeyword.checkKeywordLogic(reqDataObject, insertKeywords, deleteKeywords, state);
    return res.status(200).send(resultData);
  } catch (err) {
    return res.status(501).json(err);
  }
}

module.exports = {
  getKeywordController,
  updateTotalKeywordController,
  updateRecommendKeywordController,
}
