const userDAO = require('../../models/user/userDAO');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');

const getUserController = async (req, res, next) => {
  let usn = parseInt(req.params.usn);

  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }

  if (paramsCheck.omissionCheck([usn])) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }

  let reqDataObject = lib.createReqDataObject(req.params, req.body);
  try {
    let users = await userDAO.getUserDAO(reqDataObject);
    return res.status(200).send(users[0][0]);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateUserController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let email = req.body.email;
  let name = req.body.name;
  let imageURL = req.body.image_url;
  let description = req.body.description;
  let company = req.body.company;

  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  if (paramsCheck.omissionCheck([usn, email, name, imageURL, description, company]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  
  let reqDataObject = lib.createReqDataObject(req.params, req.body);
  try {
    let userResult = await userDAO.updateUserDAO(reqDataObject);
    return res.status(201).send(userResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getUserController,
  updateUserController,
}
