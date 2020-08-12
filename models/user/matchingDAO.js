const conn = require('../lib/conn');
const matchingQuery = require('../../queries/user/matchingQuery');

const getMentorMatchingListDAO = async (reqDataObject) => {
  // let usn = userMatchingBindValue[0];
  // let state = userMatchingBindValue[1];
  let usn = reqDataObject['usn'];
  let state = reqDataObject['state'];
  if (Number.isNaN(usn) || (Number.isNaN(state))) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }

  if ((usn === "undefined") || (state === "undefined")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 데이터 형태' });
  }

  if ((usn === "")  || (state === "")) {
    return res.status(200).json({ statusCode: 502, message: '값이 없음' });
  }
  let userMatchingBindValue = [ usn, state ];
  let data = await conn.connection(matchingQuery.getMentorMatchingListQuery, userMatchingBindValue);
  return data;
}

const getMenteeMatchingListDAO = async (reqDataObject) => {
  let usn = reqDataObject['usn'];
  let state = reqDataObject['state'];
  if (Number.isNaN(usn) || (Number.isNaN(state))) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }

  if ((usn === "undefined") || (state === "undefined")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 데이터 형태' });
  }

  if ((usn === "")  || (state === "")) {
    return res.status(200).json({ statusCode: 502, message: '값이 없음' });
  }
  let userMatchingBindValue = [ usn, state ];

  let data = await conn.connection(matchingQuery.getMenteeMatchingListQuery, userMatchingBindValue);
  return data;
}

module.exports = {
  getMentorMatchingListDAO,
  getMenteeMatchingListDAO,
}
