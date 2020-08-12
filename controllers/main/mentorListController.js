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
    let careerResult = await mentorListDAO.getAllCareerDAO();
    let orderMentorNumReseult = await mentorListDAO.getOrderedMentorListDAO(keyword,pageNum);
    let allMentorListLib = mentorListLib.mentorListLogic(careerResult, orderMentorNumReseult);
    return res.status(200).send(allMentorListLib);
  } catch (err) {
    return res.status(500).json(err);
  }
}

// 전체 검색 결과의 수(리턴이 나타내는 것은 총 검색 결과의 정수값인 값 1개인거로)
const getMentorListPageController = async (req, res, next) => {
  let keyword = req.body.keyword;
  if(keyword === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }
  if(keyword === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }
  try{
    let mentorListPageResult = await mentorListDAO.getMentorListPageDAO(keyword);
    return res.status(200).send(mentorListPageResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}


module.exports = {
  getMentorListController,
  getMentorListPageController,
}
