const pool = require('../../database/pool');
const matchingQuery = require('../../queries/matching/matchingQuery');

exports.createMatching = async (create_data) => {
    console.log(create_data);
    let conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        let create = await conn.query(matchingQuery.insertMatching, create_data);
        await conn.commit();
        return create;
    } catch (err) {
        conn.rollback()
        console.log(err)
        throw Error(err)
    } finally {
        conn.release();
    }
}

exports.updateMatching = async (update_data) => {
    console.log(update_data);
    let conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        let create = await conn.query(matchingQuery.updateMatching, update_data);
        await conn.commit();
        return create;
    } catch (err) {
        conn.rollback()
        console.log(err)
        throw Error(err)
    } finally {
        conn.release();
    }
}

exports.createMatchingKeyword = async (create_data) => {
    let conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        let create = await conn.query(matchingQuery.insertMatchingKeyword, create_data);
        await conn.commit();
        return create;
    } catch (err) {
        conn.rollback()
        console.log(err)
        throw Error(err)
    } finally {
        conn.release();
    }
}
