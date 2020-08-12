const mentorListDAO = require('../../models/main/mentorListDAO');
const mentorListLib = require('../lib/mentorList');
const paramsCheck = require('../../lib/paramsCheck');

const getMentorListController = async (req, res, next) => {
  let keyword = req.body.keyword;
  let pageNum = req.body.pageNum;

  if(paramsCheck.numberCheck([]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  } 
  else if(paramsCheck.omissionCheck([keyword, pageNum]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    try {
      //let _mentorList = await mentorListDAO.getMentorList(keyword);
      let careerResult = await mentorListDAO.getAllCareerDAO();
      let orderMentorResult = await mentorListDAO.orderMentorListDAO(keyword,pageNum);
      let allMentorListLib = mentorListLib.mentorListLogic(careerResult, orderMentorResult);
      return res.status(200).send(allMentorListLib);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

}

module.exports = {
  getMentorListController,
}
