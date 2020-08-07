const conn = require('../lib/conn');
const userQuery = require('../../queries/user/matchingQuery');

const getMentorMatchingList = async (usn, state) => {
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
  
  let data = await conn.connection(userQuery.getMentorMatchingList, param);
  return data;
}

const getMenteeMatchingList = async (usn, state) => {
  let param = [usn, state];
  let data = await conn.connection(userQuery.getMenteeMatchingList, param);
  return data;
}

module.exports = {
  getMentorMatchingList,
  getMenteeMatchingList,
}
