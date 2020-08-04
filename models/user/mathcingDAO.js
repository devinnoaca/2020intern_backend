const pool = require('../../database/pool');
const userQuery = require('../../queries/user/matchingQuery');

exports.getMentorMatchingList = async (usn, state) => {
    let param = [usn, state];
    try {
        let data = await pool.query(userQuery.getMenteeMatchingList, param);
        return data;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.getMenteeMatchingList = async (usn, state) => {
    let param = [usn, state];
    try {
        let data = await pool.query(userQuery.getMentorMatchingList, param);
        return data;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
