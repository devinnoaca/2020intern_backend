const notificationDAO = require('../../models/notification/notificationDAO');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');

const createNotificationController = async (req, res, next) => {
  let type = parseInt(req.body.type, 10);
  let message = req.body.message;

  if(paramsCheck.numberCheck([type]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([type, message])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let notificationBindValue = [type, message];
    try {
      let notificationResult = await notificationDAO.createNotificationDAO(notificationBindValue);
      return res.status(200).send(notificationResult);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

const createUserNotificationController = async (req, res, next) => {
  let time = req.body.time;
  let notiID = parseInt(req.body.notiID, 10);
  let senderUsn = parseInt(req.body.senderUsn, 10);
  let receiverUsn = parseInt(req.body.receiverUsn, 10);
  let isChecked = parseInt(req.body.isChecked, 10);

  if(paramsCheck.numberCheck([notiID, senderUsn, receiverUsn, isChecked]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([time, notiID, senderUsn, receiverUsn, isChecked])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let userNotificationBindValue = [time, notiID, senderUsn, receiverUsn, isChecked];
    try {
      let userNotificationResult = await notificationDAO.createUserNotificationDAO(userNotificationBindValue);
      return res.status(200).send(userNotificationResult);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

const getUserNotificationController = async (req, res, next) => {
  let usn = req.params.usn;
  if(paramsCheck.numberCheck([ usn ]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([ usn ])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    try {
      let result = await notificationDAO.getUserNotificationDAO(reqDataObject);
      let userNotificationResult = result[0];
      return res.status(200).send(userNotificationResult);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = {
  createNotificationController,
  createUserNotificationController,
  getUserNotificationController,
}
