const pool = require('../../database/pool');
const userQuery = require('../../queries/user/matchingQuery');

exports.getMatchingList = async (usn, state) => {
    let param = [usn, usn, state];
    try {
        let data = await pool.query(userQuery.getMatchingList, param);
        return data;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
