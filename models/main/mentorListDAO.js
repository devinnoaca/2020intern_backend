const pool = require('../../database/pool');
const mentorListQuery = require('../../queries/main/mentorListQuery');

const getMentorList = async (keyword) => {
  try {
    let query = mentorListQuery.getMentorList;
    query += ` WHERE `
    for (i = 0; i < keyword.length; i++) {
      if (i != keyword.length - 1) {
        query += `(keyword_name = "${keyword[i].keywordName}" AND category_name = "${keyword[i].categoryName}") OR `;
      } else {
        query += `(keyword_name = "${keyword[i].keywordName}" AND category_name = "${keyword[i].categoryName}") `;
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
