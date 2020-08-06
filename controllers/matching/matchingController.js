const matchingDAO = require('../../models/mathcing/mathcingDAO');

const createMatching = async (req, res, next) => {
  let mentor_usn = parseInt(req.body.mentor_usn, 10);
  let mentee_usn = parseInt(req.body.mentee_usn, 10);
  let matching_request_time = req.body.matching_request_time;
  let mathcing_response_time = req.body.mathcing_response_time;
  let mathcing_state = parseInt(req.body.matching_state, 10);
  let request_reason = req.body.request_reason;
  let isChecked = parseInt(req.body.isChecked, 10);
  let reject_reason = req.body.reject_reason;

  if (Number.isNaN(mentor_usn) || Number.isNaN(mentee_usn) || Number.isNaN(mathcing_state) || Number.isNaN(isChecked)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if ((mentor_usn === "undefined") || (mentee_usn === "undefined") || (matching_request_time === "undefined") || (mathcing_response_time === "undefined") || (mathcing_state === "undefined") ||
    (request_reason === "undefined") || (isChecked === "undefined") || (reject_reason === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if ((mentor_usn === "") || (mentee_usn === "") || (matching_request_time === "") || (mathcing_response_time === "") || (mathcing_state === "") ||
    (request_reason === "") || (isChecked === "") || (reject_reason === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  let create = [
    mentor_usn, mentee_usn, matching_request_time, mathcing_response_time, mathcing_state,
    request_reason, isChecked, reject_reason
  ];

  try {
    let result = await matchingDAO.createMatching(create);
    return res.status(200).send(result);
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
