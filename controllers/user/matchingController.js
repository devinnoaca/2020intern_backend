const matchingDAO = require('../../models/user/matchingDAO');
const lib = require('../lib/matchingList');

const getMatchingListsController = async (req, res, next) => {
  let usn  = parseInt(req.params.usn, 10);
  let userType = parseInt(req.params.userType, 10);
  let state = parseInt(req.params.state, 10);
  if(Number.isNaN(usn) || Number.isNaN(userType) || Number.isNaN(state)) {
      return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if ((usn === "undefined") || (userType === "undefined") || (state === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if ((usn === "") || (userType === "=") || (state === "")) {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  try {
    let matchingResult = userType ? await matchingDAO.getMenteeMatchingListDAO(usn, state) : await matchingDAO.getMentorMatchingListDAO(usn, state);
    return res.status(200).json(lib.createMatchingList(userType, state, matchingResult[0]));
      // return res.render('user', {user: users[0]});
      // res.json(users[0][0]);
  } catch (err) {
      return res.status(500).json(err)
  }
}

module.exports = {
  getMatchingListsController,
}
