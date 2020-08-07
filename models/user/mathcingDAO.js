const conn = require('../lib/conn');
const userQuery = require('../../queries/user/matchingQuery');

const getMentorMatchingList = async (usn, state) => {
  let param = [usn, state];
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
