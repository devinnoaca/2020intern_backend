const conn = require('../lib/conn');
const keywordListQuery = require('../../queries/main/keywordListQuery');

const getCategory = async () => {
  let data = await conn.connection(keywordListQuery.getAllCategory, []);
  return data;
}

const getKeyword = async () => {
  let data = await conn.connection(keywordListQuery.getAllKeyword, []);
  return data;
}

module.exports = {
  getCategory,
  getKeyword,
}