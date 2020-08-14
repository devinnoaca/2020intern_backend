const conn = require('../lib/conn');
const matchingQuery = require('../../queries/matching/matchingQuery');

const createMatchingDAO = async (reqDataObject) => {
  let mentorUsn = reqDataObject.mentorUsn;
  let menteeUsn = reqDataObject.menteeUsn;
  let reqTime = reqDataObject.time;
  let reqReason = reqDataObject.reqReason;
  let resTime = null;
  let resReason = "";

  // if ((create_data === "undefined") || (create_data === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	// }

  let matchingCreateBindValue = [
    mentorUsn, menteeUsn, reqTime, resTime, reqReason, resReason
  ];
  console.log(matchingCreateBindValue);

  let DBData = await conn.connection(matchingQuery.insertMatchingQuery, matchingCreateBindValue);
  return DBData;
}

const createMatchingKeywordDAO = async (reqDataObject) => {
  let keywordName = reqDataObject.keywordList[0].keywordName;
  let categoryName = reqDataObject.keywordList[0].categoryName;
  let insertId = reqDataObject.insertId;
  let matchingKeywordCreateBindValue = [];

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

  // if ((bindValue === "undefined") || (bindValue === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '데이터 없음' });
  // }
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
