const notificationDAO = require('../../models/notification/notificationDAO');

const createNotificationController = async (req, res, next) => {
  let noti_type = parseInt(req.body.type, 10);
  let message = req.body.message;

  if(Number.isNaN(noti_type) || (noti_type === "undefined") || (noti_type === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 타입' });
  }

  if((message === "undefined") || (noti_type === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 타입' });
  }

  let create = [noti_type, message];

  try {
    let result = await notificationDAO.createNotificationDAO(create);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const createUserNotificationController = async (req, res, next) => {
  let time = req.body.time;
  let noti_ID = parseInt(req.body.noti_ID, 10);
  let sender_USN = parseInt(req.body.sender_USN, 10);
  let receiver_USN = parseInt(req.body.receiver_USN, 10);
  let is_checked = parseInt(req.body.is_checked, 10);

  if(Number.isNaN(noti_ID) || Number.isNaN(sender_USN) || Number.isNaN(receiver_USN) || Number.isNaN(is_checked) ) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if((time === "undefined") || (noti_ID === "undefined") || (sender_USN === "undefined") || (receiver_USN === "undefined") || (is_checked === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 타입' });
  }

  if((time === "") || (noti_ID === "") || (sender_USN === "") || (receiver_USN === "") || (is_checked === "")) {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let create = [time, noti_ID, sender_USN, receiver_USN, is_checked];

  try {
    let result = await notificationDAO.createUserNotificationDAO(create);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  createNotificationController,
  createUserNotificationController,
}