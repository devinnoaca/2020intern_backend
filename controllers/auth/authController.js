const signUpDAO = require('../../models/auth/authDAO');
const paramsCheck = require('../../lib/paramsCheck');
const lib = require('../lib/createReqDataObject');
const crypto = require('crypto');

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

  let salt = Math.round((new Date().valueOf() * Math.random())) + "";
  let hashPassword = crypto.createHash("sha512").update(password + salt).digest("hex");

  if(paramsCheck.numberCheck([]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([ name, email, password, imageURL, description, company ])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let reqUserDataObject = lib.createReqDataObject(req.params, req.body);
    let reqAuthDataObject = {
      "id": id,
      "password": password,
      "salt": salt
    };
    reqUserDataObject.password = hashPassword;
    try {
      console.log(reqUserDataObject, reqAuthDataObject);
      let signUpResult = await signUpDAO.signUpDAO(reqUserDataObject);
      let authResult = await signUpDAO.authDAO(reqAuthDataObject);
      return res.status(200).send(signUpResult, authResult);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

const signInController = async (req, res, next) => {
  let id = req.body.id;
  let password = req.body.password;

  let salt = Math.round((new Date().valueOf() * Math.random())) + "";
  let hashPassword = crypto.createHash("sha512").update(password + salt).digest("hex");

  if(paramsCheck.numberCheck([]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([ id, password ])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let reqDataObject = lib.createReqDataObject(req.params, req.body);
    reqDataObject.password = hashPassword;
    try {
      let signInResult = await signUpDAO.signInDAO(reqDataObject);
      console.log("signInResult", signInResult[0][0].password);
      console.log("hashPassword", hashPassword);
      if (hashPassword === signInResult[0][0].password)
        return res.status(200).send(signInResult);
      else
        return res.status(500).json({ statusCode: 502, message: `Controller: 비밀번호 틀림` });
    } catch (err) {
      return res.status(500).json({ statusCode: 502, message: `Model: 데이터값 없음` })
    }
  }

}

const signOutController = async (req, res, next) => {

}

module.exports = {
  signUpController,
  signInController,
  signOutController,
}

