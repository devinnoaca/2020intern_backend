const matchingDAO = require('../../models/mathcing/matchingDAO');
const notificationDAO = require('../../models/notification/notificationDAO');
const dataLib = require('../lib/date');
//const { getFormatDate } = require('../lib/date');

const createMatchingController = async (req, res, next) => {
  let date = new Date();
  let mentorUsn = parseInt(req.body.mentorUsn, 10);
  let menteeUsn = parseInt(req.body.menteeUsn, 10);
  let requestTime = dataLib.getFormatDate(date);
  let responseTime = null;
  let reqReason = req.body.reqReason;
  let resReason = "";
  let keywordlist = req.body.keywordList;

  if (Number.isNaN(mentorUsn) || Number.isNaN(menteeUsn)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if ((mentorUsn === "undefined") || (menteeUsn === "undefined") || (requestTime === "undefined") || (responseTime === "undefined") ||
    (reqReason === "undefined") || (resReason === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if ((mentorUsn === "") || (menteeUsn === "") || (requestTime === "") || (responseTime === "") ||
    (reqReason === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  let matchingCreateBindValue = [
    mentorUsn, menteeUsn, requestTime, responseTime,
    reqReason, resReason
  ];

  let matchingKeywordCreateBindValue = [
    keywordlist[0].keywordName, keywordlist[0].categoryName
  ];

  let notificationCreateBindValue = [
    null, requestTime, mentorUsn, menteeUsn
  ]

  try {
    let matchingResult = await matchingDAO.createMatchingDAO(matchingCreateBindValue);
    matchingKeywordCreateBindValue.push(matchingResult[0].insertId);
    notificationCreateBindValue.push(matchingResult[0].insertId);
    let matchingKeywordResult = await matchingDAO.createMatchingKeywordDAO(matchingKeywordCreateBindValue);
    let notificationResult = await notificationDAO.createUserNotificationDAO(notificationCreateBindValue);
    return res.status(200).send({
      matchingResult, matchingKeywordResult, notificationResult
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateMatchingController = async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
  let matchingId = parseInt(req.params.matchingId, 10);
  let resMessage = req.body.resMessage;
  let state = req.body.state;
  let mentorUsn = parseInt(req.body.mentorUsn, 10);
  let menteeUsn = parseInt(req.body.menteeUsn, 10);

  if ((Number.isNaN(matchingId)) || (Number.isNaN(state))) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if ((matchingId === "undefined") || (resMessage === "undefined") || (state === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if ((matchingId === "") || (resMessage === "") || (state === "")) {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let date = new Date();
  let resTime = dataLib.getFormatDate(date);
  let modifyMatchingBindValue = [ resMessage, state, resTime, matchingId ];

  let notificationCreateBindValue = [
    null, resTime, menteeUsn, mentorUsn, matchingId
  ];

  try {
    let result = await matchingDAO.updateMatchingDAO(modifyMatchingBindValue);
    let notificationResult = await notificationDAO.createUserNotificationDAO(notificationCreateBindValue);
    return res.status(200).json(result)
  } catch(err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  createMatchingController,
  updateMatchingController,
}
