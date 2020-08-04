const matchingDAO = require('../../models/mathcing/mathcingDAO');

exports.createMatching = async (req, res, next) => {
    let matching_ID = req.body.matching_ID;
    let mentor_usn  = parseInt(req.body.mentor_usn, 10);
    let mentee_usn = req.body.mentee_usn;
    let matching_request_time = req.body.matching_request_time;
    let mathcing_response_time = req.body.mathcing_response_time;
    let mathcing_state = req.body.matching_state;
    let request_reason = req.body.request_reason;
    let isChecked = req.body.isChecked;
    let reject_reason = req.body.reject_reason;

    let create = [matching_ID, mentor_usn, mentee_usn, matching_request_time, mathcing_response_time, mathcing_state,
        request_reason, isChecked, reject_reason];

    try {
        let result = await matchingDAO.createMatching(create);
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).json(err);
    }
    
}

