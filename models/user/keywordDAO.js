const conn = require('../lib/conn');
const keywordQuery = require('../../queries/user/keywordQuery');

const getTotalKeywordDAO = async (reqDataObject) => {
	let usn = reqDataObject['usn'];
	if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
  let userBindValue = [ usn ];
	let data = await conn.connection(keywordQuery.gettotalkeywordQuery, userBindValue);
  return data;
}

const getRecommendKeywordDAO = async (reqDataObject) => {
	let usn = reqDataObject['usn'];
	if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
  let userBindValue = [ usn ];
	let data = await conn.connection(keywordQuery.getRecommendKeywordQuery, userBindValue);
  return data;
}

const getAllKeywordDAO = async () => {
	let data = await conn.connection(keywordQuery.getAllKeywordQuery, []);
  return data;
}

const getCategoryDAO = async () => {
	let data = await conn.connection(keywordQuery.getCategoryQuery, []);
  return data;
}

const getKeywordDAO = async (categoryID) => {
	if (Number.isNaN(categoryID) || (categoryID === "undefined") || (categoryID === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(keywordQuery.getKeywordQuery, [categoryID]);
  return data;
}

const updateTotalKeywordDAO = async (dateArray) => {
	if ((dateArray === "undefined") || (dateArray === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}

	let insertQuery = keywordQuery.insertTotalKeywordQuery;
	let deleteQuery = keywordQuery.deleteTotalKeywordQuery;

	let form_data = [];
	for(i=0; i<dateArray[1].insertKeywords.length; i++) {
		if(i==dateArray[1].insertKeywords.length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		form_data.push(dateArray[0], dateArray[1].insertKeywords[i]);
	}

	for(i=0; i<dateArray[1].deleteKeywords.length; i++) {
		if(i==dateArray[1].deleteKeywords.length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		form_data.push(dateArray[0], dateArray[1].deleteKeywords[i]);
	}

	let data = await conn.connection(insertQuery + deleteQuery, form_data);
  return data;
}


const insertTotalKeywordDAO = async (dataArray) => {
	if ((dataArray === "undefined") || (dataArray === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
	let form_data = [];
	let insertQuery = keywordQuery.insertTotalKeywordQuery;
	for(i=0; i<dataArray[1].length; i++) {
		if(i==dataArray[1].length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		form_data.push(dataArray[0], dataArray[1][i]);
	}
	let data = await conn.connection(insertQuery, form_data);
  return data;
}

const deleteTotalKeywordDAO = async (dataArray) => {
	if ((dataArray === "undefined") || (dataArray === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
	let form_data = [];
	let deleteQuery = keywordQuery.deleteTotalKeywordQuery;
	for(i=0; i<dataArray[1].length; i++) {
		if(i==dataArray[1].length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		form_data.push(dataArray[0], dataArray[1][i]);
	}

	let data = await conn.connection(deleteQuery, form_data);
  return data;
}


const updateRecommendKeywordDAO = async (dataArray) => {
	if ((dataArray === "undefined") || (dataArray === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}

	let query = keywordQuery.insertRecommendKeywordQuery;
	let form_data = [];
	for(i=0; i<dataArray[1].insertKeywords.length; i++) {
		if(i==dataArray[1].insertKeywords.length - 1) {
			query += `(?, ?);`;
		} else {
			query += `(?, ?), `;
		}
		form_data.push(dataArray[0], dataArray[1].insertKeywords[i]);
	}

	let query2 = keywordQuery.deleteRecommendKeywordQuery;
	console.log(query2);
	for(i=0; i<dataArray[1].deleteKeywords.length; i++) {
		if(i==dataArray[1].deleteKeywords.length - 1) {
			query2 += `(?, ?));`;
		} else {
			query2 += `(?, ?), `;
		}
		form_data.push(dataArray[0], dataArray[1].deleteKeywords[i]);
	}
	let data = await conn.connection(query + query2, form_data);
  return data;
}

const insertRecommendKeywordDAO = async (dataArray) => {
	if ((dataArray === "undefined") || (dataArray === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
	let form_data = [];
	let insertQuery = keywordQuery.insertRecommendKeywordQuery;
	for(i=0; i<dataArray[1].length; i++) {
		if(i==dataArray[1].length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		form_data.push(dataArray[0], dataArray[1][i]);
	}
	let data = await conn.connection(insertQuery, form_data);
  return data;
}

const deleteRecommendKeywordDAO = async (dataArray) => {
	if ((dataArray === "undefined") || (dataArray === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
	let form_data = [];
	let deleteQuery = keywordQuery.deleteRecommendKeywordQuery;
	for(i=0; i<dataArray[1].length; i++) {
		if(i==dataArray[1].length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		form_data.push(dataArray[0], dataArray[1][i]);
	}

	let data = await conn.connection(deleteQuery, form_data);
  return data;
}


module.exports = {
	getTotalKeywordDAO,
	getRecommendKeywordDAO,
	getAllKeywordDAO,
	getCategoryDAO,
	getKeywordDAO,
	updateTotalKeywordDAO,
	insertTotalKeywordDAO,
	deleteTotalKeywordDAO,
	updateRecommendKeywordDAO,
	insertRecommendKeywordDAO,
	deleteRecommendKeywordDAO,
}
