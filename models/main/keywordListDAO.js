const conn = require('../lib/conn');
const keywordListQuery = require('../../queries/main/keywordListQuery');

const getCategoryDAO = async () => {
  let DBData = await conn.connection(keywordListQuery.getAllCategoryQuery, []);
  return DBData;
}

const getKeywordDAO = async () => {
  let DBData = await conn.connection(keywordListQuery.getAllKeywordQuery, []);
  return DBData;
}

module.exports = {
  getCategoryDAO,
  getKeywordDAO,
}
