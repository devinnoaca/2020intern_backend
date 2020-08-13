const conn = require('../lib/conn');
const userQuery = require('../../queries/user/userQuery');
const authQuery = require('../../queries/auth/authQuery');

const signUpDAO = async (reqDataObject) => {
  let signUpBindValue = [];
  for (let i = 0; i < Object.keys(reqDataObject).length; i++) {
    signUpBindValue.push(reqDataObject[Object.keys(reqDataObject)[i]]);
  }
  let dbData = await conn.connection(userQuery.createUserQuery, signUpBindValue);
  return await dbData;
}

const authDAO = async (reqDataObject) => {
  console.log(reqDataObject);
  let authBindValue = [];
  for (let i = 0; i < Object.keys(reqDataObject).length; i++) {
    authBindValue.push(reqDataObject[Object.keys(reqDataObject)[i]]);
  }
  let dbData = await conn.connection(authQuery.authQuery, authBindValue);
  return await dbData;
}

const signInDAO = async (reqDataObject) => {
  // let signUpBindValue = [];
  // for (let i = 0; i < Object.keys(reqDataObject).length; i++) {
  //   signUpBindValue.push(reqDataObject[Object.keys(reqDataObject)[i]]);
  // }
  let signInBindValue = [ reqDataObject ];
  console.log(signInBindValue)
  let dbData = await conn.connection(authQuery.signInQuery, signInBindValue);
  return await dbData;
}


module.exports = {
  signUpDAO,
  signInDAO,
  authDAO,
}
