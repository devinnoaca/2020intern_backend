const keywordDAO = require('../../models/user/keywordDAO');
const userKeyword = require('../lib/user_keyword');

const getKeywordController= async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  try {
    let totalResult = await keywordDAO.getTotalKeywordDAO(usn);
    let recommendResult = await keywordDAO.getRecommendKeywordDAO(usn);
    let keywordResult = userKeyword.userKeywordLogic(usn, totalResult, recommendResult);
    return res.status(200).send(keywordResult);
    //return res.render('keyword', {total: [...total_keywords], recommend: [...recommend_keywords]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateTotalKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword = req.body.keyword;
  let insertKeywords = req.body.keyword.insertKeywords;
  let deleteKeywords = req.body.keyword.deleteKeywords;

  console.log(insertKeywords, deleteKeywords);

  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if (keyword === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if (keyword === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }


  if (insertKeywords.length === 0) {
    console.log("insertKeywords 없음");
    let deleteKeywordBindValue = [usn, deleteKeywords];
    try {
      let deleteKeywordResult = await keywordDAO.deleteTotalKeywordDAO(deleteKeywordBindValue);
      return res.status(200).send(deleteKeywordResult);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  if (deleteKeywords.length === 0) {
    console.log("delete_data 없음")
    let insertKeywordBindValue = [usn, insertKeywords];
    try {
      let insertKeywordResult = await keywordDAO.insertTotalKeywordDAO(insertKeywordBindValue);
      return res.status(200).send(insertKeywordResult);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  try {
    console.log("둘 다 길이가 1 이상");
    let totalKeywordBindValue = [usn, keyword];
    let totalKeywordResult = await keywordDAO.updateTotalKeywordDAO(totalKeywordBindValue);
    //console.log(_keyword);
    return res.status(200).send(totalKeywordResult);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(501).json(err);
  }
}

const updateRecommendKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword = req.body.keyword;
  let insertKeywords = req.body.keyword.insertKeywords;
  let deleteKeywords = req.body.keyword.deleteKeywords;

  console.log(insertKeywords, deleteKeywords);

  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if (keyword === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if (keyword === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }


  if (insertKeywords.length === 0) {
    console.log("insertKeywords 없음");
    let deleteKeywordBindValue = [usn, deleteKeywords];
    try {
      let deleteKeywordResult = await keywordDAO.deleteRecommendKeywordDAO(deleteKeywordBindValue);
      return res.status(200).send(deleteKeywordResult);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  if (deleteKeywords.length === 0) {
    console.log("delete_data 없음")
    let insertKeywordBindValue = [usn, insertKeywords];
    try {
      let insertKeywordResult = await keywordDAO.insertRecommendKeywordDAO(insertKeywordBindValue);
      return res.status(200).send(insertKeywordResult);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  try {
    console.log("둘 다 길이가 1 이상");
    let totalKeywordBindValue = [usn, keyword];
    let totalKeywordResult = await keywordDAO.updateRecommendKeywordDAO(totalKeywordBindValue);
    //console.log(_keyword);
    return res.status(200).send(totalKeywordResult);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(501).json(err);
  }
}

module.exports = {
  getKeywordController,
  updateTotalKeywordController,
  updateRecommendKeywordController,
}
