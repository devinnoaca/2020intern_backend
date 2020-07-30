const pool = require('../database/pool')
const keywordQuery = require('../queries/keywordQuery')

exports.getKeyword = async (usn) => {
    try {
        let data = await pool.query(keywordQuery.getKeyword, [usn])
        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}