const pool = require('../../database/pool');
const notificationQuery = require('../../queries/notification/notificationQuery');


const createNotification = async (create_data) => {
  console.log(create_data);
  let conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    let create = await conn.query(notificationQuery.insertNotification, create_data);
    await conn.commit();
    return create;
  } catch (err) {
    conn.rollback()
    console.log(err);
    throw Error(err);
  } finally {
    conn.release();
  }
}

module.exports = {
  createNotification,
}