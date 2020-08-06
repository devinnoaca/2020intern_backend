const pool = require('../../database/pool');
const conn = require('../lib/conn');
const notificationQuery = require('../../queries/notification/notificationQuery');


const createNotification = async (create_data) => {
  let data = conn.connection(notificationQuery.insertNotification, create_data);
  return data;
}

const createUserNotification = async (create_data) => {
  let data = conn.connection(notificationQuery.insertUserNotification, create_data);
  return data;
}



module.exports = {
  createNotification,
  createUserNotification,
}