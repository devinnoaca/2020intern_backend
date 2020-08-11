const conn = require('../lib/conn');
const keywordQuery = require('../../queries/user/keywordQuery');

const getTotalKeywordDAO = async (usn) => {
	if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(keywordQuery.gettotalkeywordQuery, [usn]);
  return data;
}

const getRecommendKeywordDAO = async (usn) => {
	if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(keywordQuery.getRecommendKeywordQuery, [usn]);
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

const getKeywordDAO = async (category_ID) => {
	if (Number.isNaN(category_ID) || (category_ID === "undefined") || (category_ID === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(keywordQuery.getKeywordQuery, [category_ID]);
  return data;
}

const updateTotalKeywordDAO = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}

	let insertQuery = keywordQuery.insertTotalKeywordQuery;
	let deleteQuery = keywordQuery.deleteTotalKeywordQuery;

	let form_data = [];
	for(i=0; i<data_array[1].insertKeywords.length; i++) {
		if(i==data_array[1].insertKeywords.length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1].insertKeywords[i]);
	}

	for(i=0; i<data_array[1].deleteKeywords.length; i++) {
		if(i==data_array[1].deleteKeywords.length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1].deleteKeywords[i]);
	}

	let data = await conn.connection(insertQuery + deleteQuery, form_data);
  return data;
}


const insertTotalKeywordDAO = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
	let form_data = [];
	let insertQuery = keywordQuery.insertTotalKeywordQuery;
	for(i=0; i<data_array[1].length; i++) {
		if(i==data_array[1].length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1][i]);
	}
	let data = await conn.connection(insertQuery, form_data);
  return data;
}

const deleteTotalKeywordDAO = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
	let form_data = [];
	let deleteQuery = keywordQuery.deleteTotalKeywordQuery;
	for(i=0; i<data_array[1].length; i++) {
		if(i==data_array[1].length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1][i]);
	}

	let data = await conn.connection(deleteQuery, form_data);
  return data;
}


const updateRecommendKeywordDAO = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}

	let query = keywordQuery.insertRecommendKeywordQuery;
	let form_data = [];
	for(i=0; i<data_array[1].insertKeywords.length; i++) {
		if(i==data_array[1].insertKeywords.length - 1) {
			query += `(?, ?);`;
		} else {
			query += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1].insertKeywords[i]);
	}

	let query2 = keywordQuery.deleteRecommendKeywordQuery;
	console.log(query2);
	for(i=0; i<data_array[1].deleteKeywords.length; i++) {
		if(i==data_array[1].deleteKeywords.length - 1) {
			query2 += `(?, ?));`;
		} else {
			query2 += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1].deleteKeywords[i]);
	}
	let data = await conn.connection(query + query2, form_data);
  return data;
}

const insertRecommendKeywordDAO = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
	let form_data = [];
	let insertQuery = keywordQuery.insertRecommendKeywordQuery;
	for(i=0; i<data_array[1].length; i++) {
		if(i==data_array[1].length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1][i]);
	}
	let data = await conn.connection(insertQuery, form_data);
  return data;
}

const deleteRecommendKeywordDAO = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	}
	let form_data = [];
	let deleteQuery = keywordQuery.deleteRecommendKeywordQuery;
	for(i=0; i<data_array[1].length; i++) {
		if(i==data_array[1].length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1][i]);
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
