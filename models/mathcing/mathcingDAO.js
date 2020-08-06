const conn = require('../lib/conn');
const matchingQuery = require('../../queries/matching/matchingQuery');

const createMatching = async (create_data) => {

  // let conn = await pool.getConnection();
  // try {
  //   await conn.beginTransaction();
  //   let create = await conn.query(matchingQuery.insertMatching, create_data);
  //   await conn.commit();
  //   return create;
  // } catch (err) {
  //   conn.rollback()
  //   console.log(err);
  //   throw Error(err);
  // } finally {
  //   conn.release();
  // }

  let data = conn.connection(matchingQuery.insertMatching, create_data);
  return data;
}

const updateMatching = async (update_data) => {

  // let conn = await pool.getConnection();
  // try {
  //   await conn.beginTransaction();
  //   let create = await conn.query(matchingQuery.updateMatching, update_data);
  //   await conn.commit();
  //   return create;
  // } catch (err) {
  //   conn.rollback()
  //   console.log(err);
  //   throw Error(err);
  // } finally {
  //   conn.release();
  // }

  let data = conn.connection(matchingQuery.updateMatching, update_data);
  return data;
}

const createMatchingKeyword = async (create_data) => {
  // let conn = await pool.getConnection();
  // try {
  //   await conn.beginTransaction();
  //   let create = await conn.query(matchingQuery.insertMatchingKeyword, create_data);
  //   await conn.commit();
  //   return create;
  // } catch (err) {
  //   conn.rollback()
  //   console.log(err)
  //   throw Error(err)
  // } finally {
  //   conn.release();
  // }

  let data = conn.connection(matchingQuery.insertMatchingKeyword, create_data);
  return data;
}

module.exports = {
  createMatching,
  updateMatching,
  createMatchingKeyword
}
