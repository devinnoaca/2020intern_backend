const conn = require('../lib/conn');
const mentorListQuery = require('../../queries/main/mentorListQuery');

const getMentorList = async (keyword) => {
  if ((keyword === "undefined") || (keyword === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
	}
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

  let data = await conn.connection(query, []);
  return data;

  
}

const getAllCareer = async () => {
  let data = await conn.connection(mentorListQuery.getAllCareer);
  return data;
}

module.exports = {
  getMentorList,
  getAllCareer,
}
