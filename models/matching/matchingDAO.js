const conn = require('../lib/conn');
const paramsCheck = require('../../lib/paramsCheck');
const matchingQuery = require('../../queries/matching/matchingQuery');

const createMatchingDAO = async (reqDataObject) => {
  let mentorUsn = reqDataObject.mentorUsn;
  let menteeUsn = reqDataObject.menteeUsn;
  let reqTime = reqDataObject.time;
  let reqReason = reqDataObject.reqReason;
  let resTime = null;
  let resReason = "";

  if (paramsCheck.numberCheck([mentorUsn, menteeUsn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([mentorUsn, menteeUsn, reqTime, reqReason]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let matchingCreateBindValue = [
    mentorUsn, menteeUsn, reqTime, resTime, reqReason, resReason
  ];

  let DBData = await conn.connection(matchingQuery.insertMatchingQuery, matchingCreateBindValue);
  return DBData;
}

const createMatchingKeywordDAO = async (reqDataObject) => {
  let keywordName = reqDataObject.keywordList[0].keywordName;
  let categoryName = reqDataObject.keywordList[0].categoryName;
  let insertId = reqDataObject.insertId;
  let matchingKeywordCreateBindValue = [];

  if (paramsCheck.numberCheck([insertId]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([keywordName, categoryName, insertId])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  for (let i = 0; i < keywordName.length; i++) {
    matchingKeywordCreateBindValue.push(
      keywordName[i], categoryName[i], insertId,
    );
  }

  let insertQuery = matchingQuery.insertMatchingKeywordQuery;
  for (let i = 0; i < keywordName.length; i++) {
    if (i === keywordName.length -1) {
      insertQuery += `(?, ?, ?);`;
    } else {
      insertQuery += `(?, ?, ?), `;
    }
  }

  let DBData = await conn.connection(insertQuery, matchingKeywordCreateBindValue);
  return DBData;
}

const updateMatchingDAO = async (reqDataObject) => {
  let resMessage = reqDataObject.resMessage;
  let state = reqDataObject.state;
  let resTime = reqDataObject.time;
  let matchingId = reqDataObject.matchingId;

  if (paramsCheck.numberCheck([matchingId, state]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([resMessage, state, resTime, matchingId])) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let updateMatchingBindValue = [
    resMessage, state, resTime, matchingId
  ];
  let DBData = await conn.connection(matchingQuery.updateMatchingQuery, updateMatchingBindValue);
  return DBData;
}


module.exports = {
  createMatchingDAO,
  updateMatchingDAO,
  createMatchingKeywordDAO
}
