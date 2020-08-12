const mentorListDAO = require('../../models/main/mentorListDAO');
const mentorListLib = require('../lib/mentorList');

const getMentorListController = async (req, res, next) => {
  let keyword = req.body.keyword;
  let pageNum = req.body.pageNum;
  
  if(keyword === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if(keyword === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  try {
    //let _mentorList = await mentorListDAO.getMentorList(keyword);
    let careerResult = await mentorListDAO.getAllCareerDAO();
    //let orderMentorResult = await mentorListDAO.orderMentorListDAO(keyword,pageNum);
    let orderMentorNumReseult = await mentorListDAO.orderMentorListNumDAO(keyword,pageNum);
    //let allMentorListLib = mentorListLib.mentorListLogic(careerResult, orderMentorResult);
    let allMentorListLib = mentorListLib.mentorListLogic(careerResult, orderMentorNumReseult);
    return res.status(200).send(allMentorListLib);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getMentorListController,
}
