const conn = require('../lib/conn');
const matchingQuery = require('../../queries/user/matchingQuery');

const getMentorMatchingListDAO = async (usn, state) => {
  let param = [usn, state];
  if (Number.isNaN(usn) || (Number.isNaN(state))) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }

  if ((usn === "undefined") || (state === "undefined")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 데이터 형태' });
  }

  if ((usn === "")  || (state === "")) {
    return res.status(200).json({ statusCode: 502, message: '값이 없음' });
  }

  let data = await conn.connection(matchingQuery.getMentorMatchingListQuery, param);
  return data;
}

const getMenteeMatchingListDAO = async (usn, state) => {
  let param = [usn, state];
  let data = await conn.connection(matchingQuery.getMenteeMatchingListQuery, param);
  return data;
}

module.exports = {
  getMentorMatchingListDAO,
  getMenteeMatchingListDAO,
}
