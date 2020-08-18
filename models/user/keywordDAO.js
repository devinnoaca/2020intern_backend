const conn = require('../lib/conn');
const paramsCheck = require('../../lib/paramsCheck');
const userKeyword = require('../lib/userKeyword');
const keywordQuery = require('../../queries/user/keywordQuery');

const getTotalKeywordDAO = async (reqDataObject) => {
	let usn = reqDataObject['usn'];
  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

	let totalKeywordBindValue = [ usn ];
	let DBData = await conn.connection(keywordQuery.gettotalkeywordQuery, totalKeywordBindValue);
  return DBData;
}

const getRecommendKeywordDAO = async (reqDataObject) => {
	let usn = reqDataObject['usn'];
  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

  let recommendKeywordBindValue = [ usn ];
	let DBData = await conn.connection(keywordQuery.getRecommendKeywordQuery, recommendKeywordBindValue);
  return DBData;
}

const getAllKeywordDAO = async () => {
	let data = await conn.connection(keywordQuery.getAllKeywordQuery, []);
  return data;
}

const getCategoryDAO = async () => {
	let data = await conn.connection(keywordQuery.getCategoryQuery, []);
  return data;
}

const getKeywordDAO = async (categoryID) => {
  if (paramsCheck.numberCheck([categoryID]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([categoryID])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

	let data = await conn.connection(keywordQuery.getKeywordQuery, [categoryID]);
  return data;
}

const updateTotalKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let insertKeywords = reqDataObject.keyword.insertKeywords;
	let deleteKeywords = reqDataObject.keyword.deleteKeywords;

	if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, insertKeywords, deleteKeywords])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

	let insertQuery = keywordQuery.insertTotalKeywordQuery;
	let deleteQuery = keywordQuery.deleteTotalKeywordQuery;

	let totalKeywordBindValue = [];
	insertQuery = userKeyword.modifyKeyword(insertKeywords, insertQuery, usn, totalKeywordBindValue, "insert");
	deleteQuery = userKeyword.modifyKeyword(deleteKeywords, deleteQuery, usn, totalKeywordBindValue, "delete");

	let DBData = await conn.connection(insertQuery + deleteQuery, totalKeywordBindValue);
  return DBData;
}


const insertTotalKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
	let insertKeywords = reqDataObject.keyword.insertKeywords;

	if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, insertKeywords])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

	let insertTotalKeywordBindValue = [];
	let insertQuery = keywordQuery.insertTotalKeywordQuery;

	insertQuery = userKeyword.modifyKeyword(insertKeywords, insertQuery, usn, insertTotalKeywordBindValue, "insert");
	let DBData = await conn.connection(insertQuery, insertTotalKeywordBindValue);
  return DBData;
}

const deleteTotalKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
	let deleteKeywords = reqDataObject.keyword.deleteKeywords;

	if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, deleteKeywords])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

	let deleteTotalKeywordBindValue = [];
	let deleteQuery = keywordQuery.deleteTotalKeywordQuery;
	deleteQuery = userKeyword.modifyKeyword(deleteKeywords, deleteQuery, usn, deleteTotalKeywordBindValue, "delete");
	let DBData = await conn.connection(deleteQuery, deleteTotalKeywordBindValue);
  return DBData;
}

const updateRecommendKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let insertKeywords = reqDataObject.keyword.insertKeywords;
  let deleteKeywords = reqDataObject.keyword.deleteKeywords;

	if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, insertKeywords, deleteKeywords])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

	let insertQuery = keywordQuery.insertRecommendKeywordQuery;
	let deleteQuery = keywordQuery.deleteRecommendKeywordQuery;

	let recommendKeywordBindValue = [];
	insertQuery = userKeyword.modifyKeyword(insertKeywords, insertQuery, usn, recommendKeywordBindValue, "insert");
	deleteQuery = userKeyword.modifyKeyword(deleteKeywords, deleteQuery, usn, recommendKeywordBindValue, "delete");
	let DBData = await conn.connection(insertQuery + deleteQuery, recommendKeywordBindValue);
  return DBData;
}

const insertRecommendKeywordDAO = async (reqDataObject) => {
	console.log("###");
  let usn = reqDataObject.usn;
  let insertKeywords = reqDataObject.keyword.insertKeywords;

	if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, insertKeywords])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

	let insertRecommendKeywordBindValue = [];
	let insertQuery = keywordQuery.insertRecommendKeywordQuery;
	insertQuery = userKeyword.modifyKeyword(insertKeywords, insertQuery, usn, insertRecommendKeywordBindValue, "insert");
	let DBData = await conn.connection(insertQuery, insertRecommendKeywordBindValue);
  return DBData;
}

const deleteRecommendKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let deleteKeywords = reqDataObject.keyword.deleteKeywords;
	if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, deleteKeywords])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
	}

	let deleteRecommendKeywordBindValue = [];
	let deleteQuery = keywordQuery.deleteRecommendKeywordQuery;
	deleteQuery = userKeyword.modifyKeyword(deleteKeywords, deleteQuery, usn, deleteRecommendKeywordBindValue, "delete");
	let DBData = await conn.connection(deleteQuery, deleteRecommendKeywordBindValue);
  return DBData;
}


module.exports = {
	getTotalKeywordDAO,
	getRecommendKeywordDAO,
	getAllKeywordDAO,
	getCategoryDAO,
	getKeywordDAO,
	updateTotalKeywordDAO,
	insertTotalKeywordDAO,
	deleteTotalKeywordDAO,
	updateRecommendKeywordDAO,
	insertRecommendKeywordDAO,
	deleteRecommendKeywordDAO,
}
