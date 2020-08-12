const signUpDAO = require('../../models/auth/authDAO');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');

//signUp
const signUpController = async (req, res, next) => {
  // let usn = parseInt(req.params.usn);
  let name = req.body.name;
  let email = req.body.email;
  let id = req.body.id;
  let password = req.body.password;
  let imageURL = req.body.imageURL
  let description = req.body.description;
  let company = req.body.company;

  if(paramsCheck.numberCheck([]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([ name, email, password, imageURL, description, company ])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    try {
      let signUpResult = await signUpDAO.signUpDAO(reqDataObject);
      return res.status(200).send(signUpResult);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

const signInController = async (req, res, next) => {
}

const signOutController = async (req, res, next) => {

}

module.exports = {
  signUpController,
  signInController,
  signOutController,
}

