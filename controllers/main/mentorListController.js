const mentorListDAO = require('../../models/main/mentorListDAO');

// http://localhost:3001/main/list?keyword0=React.js&keyword1=ELK

const getMentorList = async (req, res, next) => {
  let keyword1 = req.query.keyword0
  let keyword2 = req.query.keyword1
  let keyword = [keyword1, keyword2]

  try {
    let _mentorList = await mentorListDAO.getMentorList(keyword);
    let _careerList = await mentorListDAO.getAllCareer();
    let _career = new Array();
    let result = new Array();
    let start = 0;

    for (i = 0; i < _careerList[0].length; i++) {
      if (_careerList[0][i].career_USN === start) {
        _career[start - 1].career.push(_careerList[0][i].career);
      } else {
        _career.push({
          "usn": start + 1,
          "career": [_careerList[0][i].career],
        })
        start = start + 1;
      }
    }

    result.push({
      mentorList: []
    })

    for (j = 0; j < _mentorList[0].length; j++) {
      if (_mentorList[0][j].USN === _career[j].usn) {
        result[0].mentorList.push({
          "usn": _mentorList[0][j].USN,
          "name": _mentorList[0][j].userName,
          "imageUrl": _mentorList[0][j].image_url,
          "email": _mentorList[0][j].description,
          "description": _mentorList[0][j].description,
          "company": _mentorList[0][j].company,
          "career": _career[j].career,
        })
      }
    }

    //console.log(result[0].mentorList[0]);
    return res.status(200).send(result[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getMentorList,
}