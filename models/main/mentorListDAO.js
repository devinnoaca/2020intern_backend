const conn = require('../lib/conn');
const mentorListQuery = require('../../queries/main/mentorListQuery');

/*
변경 이전 getMentorList
변경 이후 아래의 orderMentorList 로 수정.
const getMentorList = async (keyword) => {
  if ((keyword === "undefined") || (keyword === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
  let query = mentorListQuery.getMentorList;
  query += ` WHERE `
  for (i = 0; i < keyword.length; i++) {
    if (i != keyword.length - 1) {
      query += `(keyword_ID = "${keyword[i].keyword_ID}") OR `;
    } else {
      query += `(keyword_ID = "${keyword[i].keyword_ID}") `;
    }
  }
  query += ` GROUP BY name, company, mentor_USN
  HAVING searched >= 1
  ORDER BY searched DESC;`;

  let data = await conn.connection(query, []);
  return data;  
}
*/

const getAllCareer = async () => {
  let data = await conn.connection(mentorListQuery.getAllCareer);
  return data;
}

const orderMentorList = async (keyword, pageNum) => {
  let query = mentorListQuery.orderMentor;
  let starting = pageNum*6 -5;  // 페이지마다 상위부터 6개씩 고름

  query += ` WHERE `
  for (i = 0; i < keyword.length; i++) {
    if (i != keyword.length - 1) {
      query += `(keyword_ID = "${keyword[i].keyword_ID}") OR `;
    } else {
      query += `(keyword_ID = "${keyword[i].keyword_ID}") `;
    }
  }
  query += ` GROUP BY name, company, mentor_USN HAVING searched >= 1 ORDER BY searched DESC LIMIT ${starting}, 6;`;
  // 6개씩
  console.log("pageNum이 몇인지 볼거야", pageNum);
  let data = await conn.connection(query, []);
  return data;  
  
}


module.exports = {
  //getMentorList,
  getAllCareer,
  orderMentorList,
}
