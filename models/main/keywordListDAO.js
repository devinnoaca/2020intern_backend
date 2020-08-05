const pool = require('../../database/pool');
const keywordListQuery = require('../../queries/main/keywordListQuery');

const getCategory = async () => {
  try {
    let category = await pool.query(keywordListQuery.getAllCategory);
    return category;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}

const getKeyword = async () => {
  try {
    let keyword = await pool.query(keywordListQuery.getAllKeyword);
    return keyword;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}

module.exports = {
  getCategory,
  getKeyword,
}