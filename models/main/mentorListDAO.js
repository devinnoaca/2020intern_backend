const conn = require('../lib/conn');
const mentorListQuery = require('../../queries/main/mentorListQuery');

const getAllCareerDAO = async () => {
  let data = await conn.connection(mentorListQuery.getAllCareerQuery);
  return data;
}

const orderMentorListDAO = async (keyword, pageNum) => {
  let query = mentorListQuery.orderMentorQuery;
  let starting = pageNum*6 -6;  // 페이지마다 상위부터 6개씩 고름

  query += ` WHERE `
  for (i = 0; i < keyword.length; i++) {
    if (i != keyword.length - 1) {
      query += `(keyword_ID = "${keyword[i].keywordId}") OR `;
    } else {
      query += `(keyword_ID = "${keyword[i].keywordId}") `;
    }
  }
  query += ` GROUP BY name, company, mentor_USN HAVING searched >= 1 ORDER BY searched DESC LIMIT ${starting}, 6;`;
  let data = await conn.connection(query, []);
  return data;

}


module.exports = {
  getAllCareerDAO,
  orderMentorListDAO,
}

