const matchingDAO = require('../../models/user/matchingDAO');
const lib = require('../lib/matchingList');
const paramsCheck = require('../../lib/paramsCheck');

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
    try {
      let matchingResult = userType ? await matchingDAO.getMenteeMatchingListDAO(userMatchingBindValue) 
                                    : await matchingDAO.getMentorMatchingListDAO(userMatchingBindValue);
      return res.status(200).json(lib.createMatchingList(userType, state, matchingResult[0]));
    } catch (err) {
        return res.status(500).json(err)
    }
  }
}

module.exports = {
  getMatchingListsController,
}
