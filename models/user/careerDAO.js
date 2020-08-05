const pool = require('../../database/pool');
const careerQuery = require('../../queries/user/careerQuery');

const getCareer = async (usn) => {
  try {
    let career = await pool.query(careerQuery.getCareer, [usn]);
    return career;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}

module.exports = {
  getCareer,
}
