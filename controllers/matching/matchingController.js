const matchingDAO = require('../../models/mathcing/matchingDAO');
const notificationDAO = require('../../models/notification/notificationDAO');
const dataLib = require('../lib/date');
//const { getFormatDate } = require('../lib/date');

const createMatching = async (req, res, next) => {
  let date = new Date();
  let mentor_usn = parseInt(req.body.mentorUsn, 10);
  let mentee_usn = parseInt(req.body.menteeUsn, 10);
  let matching_request_time = dataLib.getFormatDate(date);
  let mathcing_response_time = null;
  let request_reason = req.body.reqReason;
  let reject_reason = "";
  let keywordlist = req.body.keywordList;

  if (Number.isNaN(mentor_usn) || Number.isNaN(mentee_usn)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if ((mentor_usn === "undefined") || (mentee_usn === "undefined") || (matching_request_time === "undefined") || (mathcing_response_time === "undefined") || 
    (request_reason === "undefined") || (reject_reason === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if ((mentor_usn === "") || (mentee_usn === "") || (matching_request_time === "") || (mathcing_response_time === "") ||
    (request_reason === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  let matchingCreate = [
    mentor_usn, mentee_usn, matching_request_time, mathcing_response_time,
    request_reason, reject_reason
  ];

  let matchingKeywordCreate = [
    keywordlist[0].keywordName, keywordlist[0].categoryName
  ];

  let notificationCreate = [
    null, matching_request_time, mentor_usn, mentee_usn
  ]

  try {
    let MatchingResult = await matchingDAO.createMatching(matchingCreate);
    matchingKeywordCreate.push(MatchingResult[0].insertId);
    notificationCreate.push(MatchingResult[0].insertId);
    let MatchingKeywordResult = await matchingDAO.createMatchingKeyword(matchingKeywordCreate);
    let NotificationResul = await notificationDAO.createUserNotification(notificationCreate);
    return res.status(200).send({
      MatchingResult, MatchingKeywordResult, NotificationResul
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateMatching = async (req, res, next) => {
  let mathcing_state = parseInt(req.body.matching_state, 10);
  let isChecked = parseInt(req.body.is_checked, 10);
  let metching_ID = parseInt(req.params.matching_id, 10);

  if (Number.isNaN(mathcing_state) || Number.isNaN(isChecked) || Number.isNaN(metching_ID)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if ((mathcing_state === "undefined") || (isChecked === "undefined") || (metching_ID === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if ((mathcing_state === "") || (isChecked === "") || (metching_ID === "")) {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let update = [mathcing_state, isChecked, metching_ID];

  try {
    let result = await matchingDAO.updateMatching(update);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const createMatchingKeyword = async (req, res, next) => {
  let matching_keyword_name = req.body.matching_keyword_name;
  let mk_matching_ID = parseInt(req.body.mk_matching_ID, 10);
  let matching_category_name = req.body.matching_category_name;

  if (Number.isNaN(mk_matching_ID)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if ((mathcing_state === "undefined") || (isChecked === "undefined") || (metching_ID === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if ((mathcing_state === "") || (isChecked === "") || (metching_ID === "")) {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let create = [matching_keyword_name, mk_matching_ID, matching_category_name];
  try {
    let result = await matchingDAO.createMatchingKeyword(create);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  createMatching,
  updateMatching,
  createMatchingKeyword,
}
