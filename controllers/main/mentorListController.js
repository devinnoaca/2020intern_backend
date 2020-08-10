const mentorListDAO = require('../../models/main/mentorListDAO');
const mentorListLib = require('../lib/mentorList');

const getMentorList = async (req, res, next) => {
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
    let _careerList = await mentorListDAO.getAllCareer();
    let _order = await mentorListDAO.orderMentorList(keyword,pageNum);
    let allMentorList = mentorListLib.mentorListLogic(_careerList, _order);
    return res.status(200).send(allMentorList);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getMentorList,
}
