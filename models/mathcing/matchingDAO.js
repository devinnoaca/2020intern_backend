const conn = require('../lib/conn');
const matchingQuery = require('../../queries/matching/matchingQuery');

const createMatchingDAO = async (create_data) => {
  if ((create_data === "undefined") || (create_data === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
  let data = await conn.connection(matchingQuery.insertMatchingQuery, create_data);
  return data;
}

const createMatchingKeywordDAO = async (create_data) => {
  console.log(create_data);
  form_data = [];
  for(i=0; i<create_data[0].length; i++) {
    form_data.push(
      create_data[0][i], create_data[1][i], create_data[2],
    );
  }

  let insertQuery = matchingQuery.insertMatchingKeywordQuery;
  for(i=0; i<create_data[0].length; i++) {
    if(i === create_data[0].length -1) {
      insertQuery += `(?, ?, ?);`;
    } else {
      insertQuery += `(?, ?, ?), `;
    }
  }

  let data = await conn.connection(insertQuery, form_data);
  return data;
}

const updateMatchingDAO = async (bindValue) => {
  if ((bindValue === "undefined") || (bindValue === "")) {
    return res.status(200).json({ statusCode: 502, message: '데이터 없음' });
  }
  let data = await conn.connection(matchingQuery.updateMatchingQuery, bindValue);
  return data;
}


module.exports = {
  createMatchingDAO,
  updateMatchingDAO,
  createMatchingKeywordDAO
}
