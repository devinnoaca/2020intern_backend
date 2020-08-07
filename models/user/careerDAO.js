const conn = require('../lib/conn');
const careerQuery = require('../../queries/user/careerQuery');

const getCareer = async (usn) => {
	let data = await conn.connection(careerQuery.getCareer, [usn]);
  return data;
}

module.exports = {
  getCareer,
}
