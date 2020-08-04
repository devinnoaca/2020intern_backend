const pool = require('../../database/pool');
const keywordQuery = require('../../queries/user/keywordQuery')

exports.getTotalKeyword = async (usn) => {
    try {
        let data = await pool.query(keywordQuery.gettotalkeyword, [usn])
        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.getRecommendKeyword = async (usn) => {
  try {
      let data = await pool.query(keywordQuery.getRecommendKeyword, [usn])
      return data
  } catch (err) {
      console.log(err)
      throw Error(err)
  }
}

exports.getAllKeywords = async () => {
	try {
		let data = await pool.query(keywordQuery.getAllKeyword)
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
}

exports.getCategory = async () => {
	try {
		let data = await pool.query(keywordQuery.getCategory)
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
}

exports.getKeyword = async (category_ID) => {
	try {
		let data = await pool.query(keywordQuery.getKeyword, [category_ID])
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
}
