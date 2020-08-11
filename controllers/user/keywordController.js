const keyword = require('../../models/user/keywordDAO');
const user_keyword = require('../lib/user_keyword');

const getKeywords = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  try {
    let total = await keyword.getTotalKeyword(usn);
    let recommend = await keyword.getRecommendKeyword(usn);
    let result = user_keyword.userKeywordLogic(usn, total, recommend);
    return res.status(200).send(result);
    //return res.render('keyword', {total: [...total_keywords], recommend: [...recommend_keywords]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateTotalKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keywordData = req.body.keyword;
  let insertData = req.body.keyword.insertKeywords;
  let deleteData = req.body.keyword.deleteKeywords;

  console.log(insertData, deleteData);

  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if (keywordData === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if (keywordData === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }


  if (insertData.length === 0) {
    console.log("insert_data 없음");
    let data = [usn, deleteData];
    try {
      let _keyword = await keyword.deleteTotalKeyword(data);
      return res.status(200).send(_keyword);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  if (deleteData.length === 0) {
    console.log("delete_data 없음")
    let data = [usn, insertData];
    try {
      let _keyword = await keyword.insertTotalKeyword(data);
      return res.status(200).send(_keyword);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  try {
    console.log("둘 다 길이가 1 이상");
    let data = [usn, keywordData];
    let _keyword = await keyword.updateTotalKeyword(data);
    //console.log(_keyword);
    return res.status(200).send(_keyword);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(501).json(err);
  }
}

const updateRecommendKeywordController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword_data = req.body.keyword;
  let insert_data = req.body.keyword.insertKeywords;
  let delete_data = req.body.keyword.deleteKeywords;

  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if (keyword_data === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if (keyword_data === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }


  if (insert_data.length === 0) {
    console.log("insert_data 없음");
    let data = [usn, delete_data];
    try {
      let _keyword = await keyword.deleteRecommendKeyword(data);
      //console.log(_keyword);
      return res.status(200).send(_keyword);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  if (delete_data.length === 0) {
    console.log("delete_data 없음")
    let data = [usn, insert_data];
    try {
      let _keyword = await keyword.insertRecommendKeyword(data);
      //console.log(_keyword);
      return res.status(200).send(_keyword);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  try {
    console.log("둘 다 길이가 1 이상");
    let data = [usn, keyword_data];
    let _keyword = await keyword.updateRecommendKeyword(data);
    //console.log(_keyword);
    return res.status(200).send(_keyword);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(501).json(err);
  }
}

module.exports = {
  getKeywords,
  updateTotalKeywordController,
  updateRecommendKeywordController,
}
