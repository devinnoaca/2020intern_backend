const mentorListDAO = require('../../models/main/mentorListDAO');
const mentorListLib = require('../../lib/mentorList');

// http://localhost:3001/main/list?keyword0=React.js&keyword1=ELK

const getMentorList = async (req, res, next) => {
  let keyword1 = req.query.keyword0
  let keyword2 = req.query.keyword1
  let keyword = [keyword1, keyword2]

  try {
    let _mentorList = await mentorListDAO.getMentorList(keyword);
    let _careerList = await mentorListDAO.getAllCareer();
    let allMentorList = mentorListLib.mentorListLogic(_mentorList, _careerList);
    //console.log(result[0].mentorList[0]);
    return res.status(200).send(allMentorList);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getMentorList,
}