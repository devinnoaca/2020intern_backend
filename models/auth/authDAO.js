const conn = require('../lib/conn');
const userQuery = require('../../queries/user/userQuery');

const signUpDAO = async (reqDataObject) => {
  let signBindUpValue = [];
  for (let i = 0; i < Object.keys(reqDataObject).length; i++) {
    signUpBindValue.push(reqDataObject[Object.keys(reqDataObject)[i]]);
  }
  console.log(userQuery.createUserQuery);
  let dbData = await conn.connection(userQuery.createUserQuery, signUpBindValue);
  return await dbData;
}

module.exports = {
  signUpDAO,
}
