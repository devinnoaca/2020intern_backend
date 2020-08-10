const conn = require('../lib/conn');
const matchingQuery = require('../../queries/matching/matchingQuery');

const createMatching = async (create_data) => {
  if ((create_data === "undefined") || (create_data === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
  let data = await conn.connection(matchingQuery.insertMatching, create_data);
  return data;
}

const createMatchingKeyword = async (create_data) => {
  console.log(create_data);
  form_data = [];
  for(i=0; i<create_data[0].length; i++) {
    form_data.push(
      create_data[0][i], create_data[1][i], create_data[2],
    );
  }

  let insertQuery = matchingQuery.insertMatchingKeyword;
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

const updateMatching = async (update_data) => {
  if ((update_data === "undefined") || (update_data === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
  let data = await conn.connection(matchingQuery.updateMatching, update_data);
  return data;
}

module.exports = {
  createMatching,
  updateMatching,
  createMatchingKeyword
}
