const matchingDAO = require('../../models/matching/matchingDAO');
const notificationDAO = require('../../models/notification/notificationDAO');
const dataLib = require('../lib/date');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');

const createMatchingController = async (req, res, next) => {
  let date = new Date();
  let mentorUsn = parseInt(req.body.mentorUsn, 10);
  let menteeUsn = parseInt(req.body.menteeUsn, 10);
  let requestTime = dataLib.getFormatDate(date);
  // let responseTime = null;
  let reqReason = req.body.reqReason;
  // let resReason = "";
  let keywordlist = req.body.keywordList;

  if(paramsCheck.numberCheck([mentorUsn, menteeUsn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([mentorUsn, menteeUsn, reqReason, keywordlist]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    reqDataObject.time = requestTime;

    // let matchingCreateBindValue = [
    //   mentorUsn, menteeUsn, requestTime, responseTime,
    //   reqReason, resReason
    // ];

    // let matchingKeywordCreateBindValue = [
    //   keywordlist[0].keywordName, keywordlist[0].categoryName
    // ];

    // let notificationCreateBindValue = [
    //   null, requestTime, mentorUsn, menteeUsn
    // ]

    try {
      let matchingResult = await matchingDAO.createMatchingDAO(reqDataObject);
      // matchingKeywordCreateBindValue.push(matchingResult[0].insertId);
      // notificationCreateBindValue.push(matchingResult[0].insertId);
      reqDataObject.insertId = matchingResult[0].insertId;
      let matchingKeywordResult = await matchingDAO.createMatchingKeywordDAO(reqDataObject);
      let notificationResult = await notificationDAO.createUserNotificationDAO(reqDataObject);
      return res.status(200).send({
        matchingResult, matchingKeywordResult, notificationResult
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

const updateMatchingController = async (req, res, next) => {
  let date = new Date();
  let resTime = dataLib.getFormatDate(date);
  let matchingId = parseInt(req.params.matchingId, 10);
  let resMessage = req.body.resMessage;
  let state = req.body.state;
  let mentorUsn = parseInt(req.body.mentorUsn, 10);
  let menteeUsn = parseInt(req.body.menteeUsn, 10);

  if(paramsCheck.numberCheck([matchingId, mentorUsn, menteeUsn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([matchingId, mentorUsn, menteeUsn, resMessage, state]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    reqDataObject.time = resTime;

    let modifyMatchingBindValue = [ resMessage, state, resTime, matchingId ];
    let notificationCreateBindValue = [
      null, resTime, menteeUsn, mentorUsn, matchingId
    ];

    try {
      let result = await matchingDAO.updateMatchingDAO(reqDataObject);
      let notificationResult = await notificationDAO.createUserNotificationDAO(reqDataObject);
      return res.status(200).json(result)
    } catch(err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = {
  createMatchingController,
  updateMatchingController,
}
