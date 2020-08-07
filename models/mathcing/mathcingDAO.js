const conn = require('../lib/conn');
const matchingQuery = require('../../queries/matching/matchingQuery');

const createMatching = async (create_data) => {
  let data = conn.connection(matchingQuery.insertMatching, create_data);
  return data;
}

const updateMatching = async (update_data) => {
  let data = conn.connection(matchingQuery.updateMatching, update_data);
  return data;
}

const createMatchingKeyword = async (create_data) => {
  let data = await conn.connection(matchingQuery.insertMatchingKeyword, create_data);
  return data;
}

module.exports = {
  createMatching,
  updateMatching,
  createMatchingKeyword
}
