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
  try {
    let careerResult = await mentorListDAO.getAllCareerDAO();
    let orderMentorNumReseult = await mentorListDAO.orderMentorListNumDAO(keyword,pageNum);

    let allMentorListLib = mentorListLib.mentorListLogic(careerResult, orderMentorNumReseult);
    return res.status(200).send(allMentorListLib);
  } catch (err) {
    return res.status(500).json(err);
  }

}

// 페이지만 가져올 그런 병ㅇㅇ신같은 거임
const getMentorListPageController = async (req, res, next) => {
  let keyword = req.body.keyword;
  if(keyword === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }
  if(keyword === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }
  try{
    let mentorListPageResult = await mentorListDAO.mentorListPageDAO(keyword);
    return res.status(200).send(mentorListPageResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}


module.exports = {
  getMentorListController,
  getMentorListPageController,
}
