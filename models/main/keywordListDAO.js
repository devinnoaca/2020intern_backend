const pool = require('../../database/pool');
const keywordListQuery = require('../../queries/main/keywordListQuery');

exports.getCategory = async () => {
    try {
        let category = await pool.query(keywordListQuery.getAllCategory);
        return category;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.getKeyword = async () => {
    try {
        let keyword = await pool.query(keywordListQuery.getAllKeyword);
        return keyword;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}