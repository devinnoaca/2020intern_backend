const careerDAO = require('../../models/user/careerDAO');
const paramsCheck = require('../../lib/paramsCheck');

const getUserCareerController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);

  if(paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  } 
  else if(paramsCheck.omissionCheck([usn])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
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
}

const handleUserCareerController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let career = req.body.career;

  if(paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  } 
  else if(paramsCheck.omissionCheck([usn, career])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    try {
      let careerResult = await careerDAO.handleCareerDAO(career);
      return res.status(200).send(careerResult);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = {
  getUserCareerController,
  handleUserCareerController,
}
