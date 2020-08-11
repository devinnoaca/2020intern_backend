const careerDAO = require('../../models/user/careerDAO');

const getUserCareerController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  try {
    let careerResult = await careerDAO.getCareerDAO(usn);
    for (let i = 0; i < careerResult[0].length; i++) {
      careerResult[0][i].type = null;
    }
    let careerDataFormat = {};
    careerDataFormat.career = [...careerResult[0]]
    return res.status(200).send(careerDataFormat);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

const handleUserCareerController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let career = req.body.career;

  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  if(career === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }
  if(career === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  try {
    let careerResult = await careerDAO.handleCareerDAO(career);
    return res.status(200).send(careerResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getUserCareerController,
  handleUserCareerController,
}
