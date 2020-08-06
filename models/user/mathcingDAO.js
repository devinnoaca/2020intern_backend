const pool = require('../../database/pool');
const userQuery = require('../../queries/user/matchingQuery');

const getMentorMatchingList = async (usn, state) => {
  let param = [usn, state];
  try {
    let data = await pool.query(userQuery.getMentorMatchingList, param);
    console.log(data[0]);
    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}

const getMenteeMatchingList = async (usn, state) => {
  let param = [usn, state];
  try {
    let data = await pool.query(userQuery.getMenteeMatchingList, param);
    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}

module.exports = {
  getMentorMatchingList,
  getMenteeMatchingList,
}
