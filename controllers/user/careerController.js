const careerDAO = require('../../models/user/careerDAO');
const lib = require('../lib/createReqDataObject');
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
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    try {
      let careerResult = await careerDAO.getCareerDAO(reqDataObject);
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

  let careerBindValue = [],
      insertCareerQueryBindValue = [],
      updateCareerQueryBindValueCase = [], updateCareerQueryBindValueWhere = [],
      deleteCareerQueryBindValue = [];

  for (let i = 0; i < career.length; i++) {
    if (career[i].content === "" || career[i].type === null) continue;

    switch (career[i].type) {
      case 0:
        insertCareerQueryBindValue.push(career[i].content, career[i].user_USN);
        break;
      case 1:
        updateCareerQueryBindValueCase.push(career[i].ID, career[i].content);
        updateCareerQueryBindValueWhere.push(career[i].ID);
        break;
      case 2:
        deleteCareerQueryBindValue.push(career[i].ID);
        break;
    }
  }

  if (insertCareerQueryBindValue.length) {
    careerBindValue = careerBindValue.concat(insertCareerQueryBindValue);
  }

  if (updateCareerQueryBindValueCase.length) {
    careerBindValue = careerBindValue.concat(updateCareerQueryBindValueCase, updateCareerQueryBindValueWhere);
  }

  if (deleteCareerQueryBindValue.length) {
    careerBindValue = careerBindValue.concat(deleteCareerQueryBindValue);
  }
  careerBindValue.push(career);
  try {
    let careerResult = await careerDAO.handleCareerDAO(careerBindValue);
    return res.status(200).send(careerResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getUserCareerController,
  handleUserCareerController,
}