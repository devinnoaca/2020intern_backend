const keyword = require('../../models/user/keywordDAO');
const user_keyword = require('../lib/user_keyword');

const getKeywords = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  try {
    let total = await keyword.getTotalKeyword(usn);
    let recommend = await keyword.getRecommendKeyword(usn);
    let result = user_keyword.userKewordLogic(usn, total, recommend);
    return res.status(200).send(result);
    //return res.render('keyword', {total: [...total_keywords], recommend: [...recommend_keywords]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateTotalKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword_data = req.body.keyword;
  if (Number.isNaN(usn)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  let data = [usn, keyword_data];
  try {
    let _keyword = await keyword.updateTotalKeyword(data);
    return res.status(200).send(_keyword);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

const deleteTotalKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword_data = req.body.keyword;
  if (Number.isNaN(usn)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  let data = [usn, keyword_data];
  try {
    let _keyword = await keyword.deleteTotalKeyword(data);
    return res.status(200).send(_keyword);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getKeywords,
  updateTotalKeywordController,
  deleteTotalKeywordController,
}
