const conn = require('../lib/conn');
const keywordQuery = require('../../queries/user/keywordQuery')

const getTotalKeyword = async (usn) => {
	if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(keywordQuery.gettotalkeyword, [usn]);
  return data;
}

const getRecommendKeyword = async (usn) => {
	if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(keywordQuery.getRecommendKeyword, [usn]);
  return data;
}

const getAllKeywords = async () => {
	let data = await conn.connection(keywordQuery.getAllKeyword, []);
  return data;
}

const getCategory = async () => {
	let data = await conn.connection(keywordQuery.getCategory, []);
  return data;
}

const getKeyword = async (category_ID) => {
	if (Number.isNaN(category_ID) || (category_ID === "undefined") || (category_ID === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(keywordQuery.getKeyword, [category_ID]);
  return data;
}

const updateTotalKeyword = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
	}

	let query = keywordQuery.insertTotalKeyword;
	let form_data = [];
	for(i=0; i<data_array[1].length; i++) {
		if(i==data_array[1].length -1){
			query += `(?, ?);`;
		} else {
			query += `(?, ?);,`;
		}
		form_data.push(data_array[0], data_array[1][i]);
	}

	let data = await conn.connection(query, form_data);
  return data;
}

const deleteTotalKeyword = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
	}

	// if(data_array[1].length = 0) return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });

	let form_data = [];
	let query = keywordQuery.deleteTotalKeyword;
	for(i=0; i<data_array[1].length; i++){
		if(i==data_array[1].length -1) {
			query += `(?, ?));`;
		} else {
			query += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1][i]);
	}

	let data = await conn.connection(query, form_data);
  return data;
}

const updateRecommendKeyword = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
	}
	let query = keywordQuery.insertRecommendKeyword;
	let form_data = [];
	for(i=0; i<data_array[1].length; i++) {
		if(i==data_array[1].length -1){
			query += `(?, ?);`;
		} else {
			query += `(?, ?),`;
		}
		form_data.push(data_array[0], data_array[1][i]);
	}

	let data = await conn.connection(query, form_data);
  return data;
}

const deleteRecommendKeyword = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
	}

	// if(data_array[1].length = 0) return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });

	let form_data = [];
	let query = keywordQuery.deleteRecommendKeyword;
	for(i=0; i<data_array[1].length; i++){
		if(i==data_array[1].length -1) {
			query += `(?, ?));`;
		} else {
			query += `(?, ?), `;
		}
		form_data.push(data_array[0], data_array[1][i]);
	}

	let data = await conn.connection(query, form_data);
  return data;
}


module.exports = {
	getTotalKeyword,
	getRecommendKeyword,
	getAllKeywords,
	getCategory,
	getKeyword,
	updateTotalKeyword,
	deleteTotalKeyword,
  updateRecommendKeyword,
  deleteRecommendKeyword,
}
