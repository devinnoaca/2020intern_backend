const user = require('../../models/user/careerDAO');

const getUserCareer = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  let careers = new Set();
  try {
    let career = await user.getCareer(usn);

    for (let i = 0; i < career[0].length; i++) {
      careers.add(career[0][i].content);
    }
    let data = {};
    data.career = [...career[0]]
    return res.status(200).send(data);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateCareerController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword_data = req.body.keywords;
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if(keyword_data === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if(keyword_data === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let data = [usn, keyword_data];
  try {
    let _keyword = await user.updateCareer(data);
    return res.status(200).send(_keyword);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

const deleteCareerController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let keyword_data = req.body.keyword;
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if(keyword_data === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if(keyword_data === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let data = [usn, keyword_data];
  try {
    let _keyword = await user.deleteCareer(data);
    return res.status(200).send(_keyword);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getUserCareer,
  updateCareerController,
  deleteCareerController,
}
