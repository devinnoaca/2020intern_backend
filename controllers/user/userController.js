const userDAO = require('../../models/user/userDAO');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');
let jwtCheckLogic = require("../lib/jwtCheck");

const getUserController = async (req, res, next) => {
  let decoded = jwtCheckLogic.jwtCheckLogic(req, res);
  let usn = decoded.usn;

  if(paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([usn])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    reqDataObject.usn = usn
    try {
      let users = await userDAO.getUserDAO(reqDataObject);
      return res.status(200).send(users[0][0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

const updateUserController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let email = req.body.email;
  let name = req.body.name;
  let imageURL = req.body.image_url;
  let description = req.body.description;
  let company = req.body.company;

  if(paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([usn, email, name, imageURL, description]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    let userBindValue = [name, email, imageURL, description, company, usn];
    try {
      let userResult = await userDAO.updateUserDAO(reqDataObject);
      return res.status(201).send(userResult);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

// exports.deleteUser = async (req, res, next) => {
//     let { boardId, commentId } = req.params
//     try {
//         let del = await BoardService.deleteComment(boardId, commentId)
//         return res.json(del)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

module.exports = {
  getUserController,
  updateUserController,
}
