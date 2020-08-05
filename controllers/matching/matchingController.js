const matchingDAO = require('../../models/mathcing/mathcingDAO');

const createMatching = async (req, res, next) => {
  let mentor_usn = parseInt(req.body.mentor_usn, 10);
  let mentee_usn = req.body.mentee_usn;
  let matching_request_time = req.body.matching_request_time;
  let mathcing_response_time = req.body.mathcing_response_time;
  let mathcing_state = req.body.matching_state;
  let request_reason = req.body.request_reason;
  let isChecked = req.body.isChecked;
  let reject_reason = req.body.reject_reason;

  let create = [mentor_usn, mentee_usn, matching_request_time, mathcing_response_time, mathcing_state,
    request_reason, isChecked, reject_reason];

  try {
    let result = await matchingDAO.createMatching(create);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateMatching = async (req, res, next) => {
  let matching_state = req.body.matching_state;
  let is_checked = req.body.is_checked;
  let metching_ID = parseInt(req.params.matching_id, 10);
  console.log(metching_ID);
  let update = [matching_state, is_checked, metching_ID];

  try {
    let result = await matchingDAO.updateMatching(update);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const createMatchingKeyword = async (req, res, next) => {
  let matching_keyword_name = req.body.matching_keyword_name;
  let mk_matching_ID = req.body.mk_matching_ID;
  let matching_category_name = req.body.matching_category_name;

  let create = [matching_keyword_name, mk_matching_ID, matching_category_name];
  console.log(create);
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