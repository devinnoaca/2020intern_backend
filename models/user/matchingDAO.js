const conn = require('../lib/conn');
const paramsCheck = require('../../lib/paramsCheck');
const matchingQuery = require('../../queries/user/matchingQuery');

const getMentorMatchingListDAO = async (reqDataObject) => {
  let usn = reqDataObject['usn'];
  let state = reqDataObject['state'];

  if (paramsCheck.numberCheck([usn, state]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }

  if (paramsCheck.omissionCheck([usn, state]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let userMatchingBindValue = [ usn, state ];
  let data = await conn.connection(matchingQuery.getMentorMatchingListQuery, userMatchingBindValue);
  return data;
}

const getMenteeMatchingListDAO = async (reqDataObject) => {
  let usn = reqDataObject['usn'];
  let state = reqDataObject['state'];

  if (paramsCheck.numberCheck([usn, state]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }

  if (paramsCheck.omissionCheck([usn, state]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let userMatchingBindValue = [ usn, state ];
  let data = await conn.connection(matchingQuery.getMenteeMatchingListQuery, userMatchingBindValue);
  return data;
}

module.exports = {
  getMentorMatchingListDAO,
  getMenteeMatchingListDAO,
}
