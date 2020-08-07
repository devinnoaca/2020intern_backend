const pool = require('../../database/pool');
const conn = require('../lib/conn');
const notificationQuery = require('../../queries/notification/notificationQuery');


const createNotification = async (create_data) => {
  if ((create_data === "undefined") || (create_data === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
  let data = await conn.connection(notificationQuery.insertNotification, create_data);
  return data;
}

const createUserNotification = async (create_data) => {
  if ((create_data === "undefined") || (create_data === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
  let data = await conn.connection(notificationQuery.insertUserNotification, create_data);
  return data;
}



module.exports = {
  createNotification,
  createUserNotification,
}