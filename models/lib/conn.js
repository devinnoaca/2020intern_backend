const pool = require('../../database/pool');

const connection = async (query_data, body_data) => {
	let conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    // console.log(query_data, body_data);
    let data = await pool.query(query_data, body_data);
    return data;
  } catch (err) {
    conn.rollback()
    console.log(err); 
    throw Error(err);
  } finally {
    conn.release();
  }
}

module.exports = {
	connection,
}