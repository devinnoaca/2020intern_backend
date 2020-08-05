const pool = require('../../database/pool');
const mentorListQuery = require('../../queries/main/mentorListQuery');

// 나중에 qeury를 params를 쓸껀지 정해야 한다.  
const getMentorList = async (keyword) => {
  try {
    let query = mentorListQuery.getMentorList;
    query += ` WHERE `
    for (i = 0; i < keyword.length; i++) {
      if (i != keyword.length - 1) {
        query += `keyword_name = "${keyword[i]}" OR `;
      } else {
        query += `keyword_name = "${keyword[i]}" `;
      }
    }
    query += ` ORDER BY mentor_USN`;

    console.log(query);

    let mentorList = await pool.query(query);
    return mentorList;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}

const getAllCareer = async () => {
  try {
    let carrer = await pool.query(mentorListQuery.getAllCareer);
    console.log(carrer);
    return carrer;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}

module.exports = {
  getMentorList,
  getAllCareer,
}