const conn = require('../lib/conn');
const mentorListQuery = require('../../queries/main/mentorListQuery');

const getAllCareerDAO = async () => {
  let data = await conn.connection(mentorListQuery.getAllCareerQuery);
  return data;
}

const getMentorListPageDAO = async (keyword) => {
  let query = mentorListQuery.getMentorListPageQuery;

  query += ` WHERE keyword_ID IN (`
  for (i = 0; i < keyword.length; i++) {
      query += `"${keyword[i].keywordId}"`;
      if (i != keyword.length - 1){query += `,`;}
  }
  query += `) GROUP BY name, company HAVING searched >= 1) A ;`;
  let data = await conn.connection(query, []);
  return data[0];
}

const getOrderedMentorListDAO = async (keyword, pageNum) => {
  let query = mentorListQuery.getOrderedMentorListQuery;
  let starting = (pageNum-1)*6;  // 페이지마다 상위부터 6개씩 고름

  query += ` WHERE keyword_ID IN (`
  for (i = 0; i < keyword.length; i++) {
      query += `"${keyword[i].keywordId}"`;
      if (i != keyword.length - 1){query += `,`;}
  }
  query += `) GROUP BY name, company, mentor_USN HAVING searched >= 1 ORDER BY searched DESC LIMIT ${starting}, 6;`;
  let data = await conn.connection(query, []);
  return data;
}



module.exports = {
  getAllCareerDAO,
  getMentorListPageDAO,
  getOrderedMentorListDAO
}

