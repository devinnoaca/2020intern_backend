const conn = require('../lib/conn');
const userQuery = require('../../queries/user/userQuery');
const authQuery = require('../../queries/auth/authQuery');

const signUpDAO = async (reqDataObject) => {
  let signUpBindValue = [];
  for (let i = 0; i < Object.keys(reqDataObject).length; i++) {
    signUpBindValue.push(reqDataObject[Object.keys(reqDataObject)[i]]);
  }
  let dbData = await conn.connection(authQuery.createUserQuery, signUpBindValue);
  return await dbData;
}

const authDAO = async (reqDataObject) => {
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
  let dbData = await conn.connection(authQuery.signInQuery, signInBindValue);
  return await dbData;
}

const updateUserPassword = async (reqDataObject) => {
  let updateUserPasswordBindValue =  reqDataObject;
  let query = userQuery.getUserQuery;
  query += authQuery.updateUserPasswordQuery;
  let dbData = await conn.connection(authQuery.updateUserPasswordQuery, updateUserPasswordBindValue);
  return await dbData;
}


module.exports = {
  signUpDAO,
  signInDAO,
  authDAO,
  updateUserPassword,
}
