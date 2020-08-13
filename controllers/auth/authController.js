const signUpDAO = require('../../models/auth/authDAO');
const userDAO = require('../../models/user/userDAO');
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
      "password": hashPassword,
      "salt": salt
    };
    reqUserDataObject.password = hashPassword;
    try {
      let signUpResult = await signUpDAO.signUpDAO(reqUserDataObject);
      let authResult = await signUpDAO.authDAO(reqAuthDataObject);
      console.log(signUpResult);
      console.log(authResult);
      return res.status(200).send({ signUpResult, authResult });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

const getSignInController = async (req, res, next) => {
    res.render("login");
}

const signInController = async (req, res, next) => {
  let id = req.body.id;
  let password = req.body.password;

  let signInResult = await signUpDAO.signInDAO(id);
  let userResult = await userDAO.getUserIdDAO(id);

  let salt = signInResult[0][0].salt;
  let DBPassword = signInResult[0][0].password;
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
      if (reqDataObject.password === DBPassword) {
        req.session.usn = userResult[0][0].USN;
        //res.redirect("/index");
        // return res.status(200).send({statusCode: 202, message: `로그인 성공`});
        req.session.save(() => {
          res.send({
            title: "로그인 성공",
            session : req.session
          });
        });
      }
      else {
        return res.status(500).json({ statusCode: 502, message: `Controller: 비밀번호 틀림` });
      }
    } catch (err) {
      return res.status(500).json({ statusCode: 502, message: `Model: 데이터값 없음` })
    }
  }
}

const signOutController = async (req, res, next) => {
  console.log(req.session.id);
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect("/auth/login")
}

module.exports = {
  signUpController,
  signInController,
  signOutController,
  getSignInController,
}
