const pool = require('../database/pool')
const keywordQuery = require('../queries/keywordQuery')

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

