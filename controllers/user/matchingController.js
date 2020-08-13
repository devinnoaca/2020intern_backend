const matchingDAO = require('../../models/user/matchingDAO');
const matchingList = require('../lib/matchingList');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');

const getMatchingListsController = async (req, res, next) => {
  let usn  = parseInt(req.params.usn, 10);
  let userType = parseInt(req.params.userType, 10);
  let state = parseInt(req.params.state, 10);

  if(paramsCheck.numberCheck([usn, userType, state]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([usn, userType, state])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let userMatchingBindValue = [usn, state];
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    console.log(reqDataObject);
    try {
      let matchingResult = userType ? await matchingDAO.getMenteeMatchingListDAO(reqDataObject)
                                    : await matchingDAO.getMentorMatchingListDAO(reqDataObject);
      return res.status(200).json(matchingList.createMatchingList(userType, state, matchingResult[0]));
    } catch (err) {
        return res.status(500).json(err)
    }
  }
}

module.exports = {
  getMatchingListsController,
}
