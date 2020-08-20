const conn = require('../lib/conn');
const paramsCheck = require('../../lib/paramsCheck');
const notificationQuery = require('../../queries/notification/notificationQuery');


// const createNotificationDAO = async (create_data) => {
//   if ((create_data === "undefined") || (create_data === "")) {
//     return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
// 	}
//   let data = await conn.connection(notificationQuery.insertNotificationQuery, create_data);
//   return data;
// }

const createUserNotificationDAO = async (reqDataObject) => {
  let notiId = null;
  let time = reqDataObject.time;
  let senderUsn = "", receiverUsn = "";
  if (reqDataObject.state === undefined) {
    senderUsn = reqDataObject.menteeUsn;
    receiverUsn = reqDataObject.mentorUsn;
  } else {
    senderUsn = reqDataObject.mentorUsn;
    receiverUsn = reqDataObject.menteeUsn;
  }
  let matchingId = reqDataObject.matchingId;

  console.log(senderUsn, receiverUsn);
	if (paramsCheck.numberCheck([senderUsn, receiverUsn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([time, senderUsn, receiverUsn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let notificationCreateBindValue = [
    notiId, time, senderUsn, receiverUsn, matchingId
  ];
  let DBData = await conn.connection(notificationQuery.insertUserNotificationQuery, notificationCreateBindValue);
  return DBData;
}

const getUserNotificationDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;

	if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let getUserNotificationBindValue = [ usn ];
  let getUserNotificationQuery = notificationQuery.getUserNotificationQuery;
  let DBData = await conn.connection(getUserNotificationQuery, getUserNotificationBindValue);
  return DBData;
}

module.exports = {
  //createNotificationDAO,
  createUserNotificationDAO,
  getUserNotificationDAO,
}
