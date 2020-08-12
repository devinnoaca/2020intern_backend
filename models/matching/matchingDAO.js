const conn = require('../lib/conn');
const matchingQuery = require('../../queries/matching/matchingQuery');

const createMatchingDAO = async (reqDataObject) => {
  let mentorUsn = reqDataObject.mentorUsn;
  let menteeUsn = reqDataObject.menteeUsn;
  let requestTime = reqDataObject.requestTime;
  let reqReason = reqDataObject.reqReason;
  let responseTime = null;
  let resReason = "";

  // if ((create_data === "undefined") || (create_data === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	// }

  let matchingCreateBindValue = [
    mentorUsn, menteeUsn, requestTime, responseTime, reqReason, resReason
  ];

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

const updateMatchingDAO = async (bindValue) => {
  if ((bindValue === "undefined") || (bindValue === "")) {
    return res.status(200).json({ statusCode: 502, message: '데이터 없음' });
  }
  let data = await conn.connection(matchingQuery.updateMatchingQuery, bindValue);
  return data;
}


module.exports = {
  createMatchingDAO,
  updateMatchingDAO,
  createMatchingKeywordDAO
}
