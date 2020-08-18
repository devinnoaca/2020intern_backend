const mentorListDAO = require('../../models/main/mentorListDAO');
const mentorListLib = require('../lib/mentorList');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');

const getMentorListController = async (req, res, next) => {
  let keyword = req.body.keyword;
  let pageNum = req.body.pageNum;

  // if(paramsCheck.numberCheck([]) === false) {
  //   return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  // }
  // if(paramsCheck.omissionCheck([keyword, pageNum]) === false) {
  //   return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  // }

  try {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    let careerResult = await mentorListDAO.getAllCareerDAO();
    let orderMentorNumResult = await mentorListDAO.getOrderedMentorListDAO(reqDataObject);

    let allMentorListLib = mentorListLib.mentorListLogic(careerResult, orderMentorNumResult);
    console.log(allMentorListLib);
    return res.status(200).send(allMentorListLib);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const getMentorListPageController = async (req, res, next) => {
  let keyword = req.body.keyword;

  // if(paramsCheck.numberCheck([]) === false) {
  //   return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  // }
  // if(paramsCheck.omissionCheck([keyword]) === false) {
  //   return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  // }

  try{
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    let result = await mentorListDAO.getMentorListPageDAO(reqDataObject);
    let mentorListPageResult = {
      "totalSearch": result[0].totalSearch
    };
    return res.status(200).send(mentorListPageResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}


module.exports = {
  getMentorListController,
  getMentorListPageController,
}
