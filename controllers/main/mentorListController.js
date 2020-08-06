const mentorListDAO = require('../../models/main/mentorListDAO');
const mentorListLib = require('../../lib/mentorList');

const getMentorList = async (req, res, next) => {
  let keyword = req.body.keyword;
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
