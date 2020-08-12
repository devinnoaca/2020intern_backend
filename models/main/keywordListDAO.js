const conn = require('../lib/conn');
const keywordListQuery = require('../../queries/main/keywordListQuery');

const getCategoryDAO = async () => {
  let data = await conn.connection(keywordListQuery.getAllCategoryQuery, []);
  return data;
}

const getKeywordDAO = async () => {
  let data = await conn.connection(keywordListQuery.getAllKeywordQuery, []);
  return data;
}

module.exports = {
  getCategoryDAO,
  getKeywordDAO,
}