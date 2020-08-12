const notificationDAO = require('../../models/notification/notificationDAO');

const createNotificationController = async (req, res, next) => {
  let type = parseInt(req.body.type, 10);
  let message = req.body.message;

  if(Number.isNaN(type) || (type === "undefined") || (type === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 타입' });
  }

  if((message === "undefined") || (type === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 타입' });
  }

  let notificationBindValue = [type, message];

  try {
    let notificationResult = await notificationDAO.createNotificationDAO(notificationBindValue);
    return res.status(200).send(notificationResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const createUserNotificationController = async (req, res, next) => {
  let time = req.body.time;
  let notiID = parseInt(req.body.notiID, 10);
  let senderUsn = parseInt(req.body.senderUsn, 10);
  let receiverUsn = parseInt(req.body.receiverUsn, 10);
  let isChecked = parseInt(req.body.isChecked, 10);

  if(Number.isNaN(notiID) || Number.isNaN(senderUsn) || Number.isNaN(receiverUsn) || Number.isNaN(isChecked) ) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if((time === "undefined") || (notiID === "undefined") || (senderUsn === "undefined") || (receiverUsn === "undefined") || (isChecked === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 타입' });
  }

  if((time === "") || (notiID === "") || (senderUsn === "") || (receiverUsn === "") || (isChecked === "")) {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let userNotificationBindValue = [time, notiID, senderUsn, receiverUsn, isChecked];

  try {
    let userNotificationResult = await notificationDAO.createUserNotificationDAO(userNotificationBindValue);
    return res.status(200).send(userNotificationResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  createNotificationController,
  createUserNotificationController,
}