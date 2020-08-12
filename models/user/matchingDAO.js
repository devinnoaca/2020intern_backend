const conn = require('../lib/conn');
const matchingQuery = require('../../queries/user/matchingQuery');

const getMentorMatchingListDAO = async (userMatchingBindValue) => {
  let usn = userMatchingBindValue[0];
  let state = userMatchingBindValue[1];
  if (Number.isNaN(usn) || (Number.isNaN(state))) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }

  if ((usn === "undefined") || (state === "undefined")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 데이터 형태' });
  }

  if ((usn === "")  || (state === "")) {
    return res.status(200).json({ statusCode: 502, message: '값이 없음' });
  }

  let data = await conn.connection(matchingQuery.getMentorMatchingListQuery, userMatchingBindValue);
  return data;
}

const getMenteeMatchingListDAO = async (userMatchingBindValue) => {
  let data = await conn.connection(matchingQuery.getMenteeMatchingListQuery, userMatchingBindValue);
  return data;
}

module.exports = {
  getMentorMatchingListDAO,
  getMenteeMatchingListDAO,
}
