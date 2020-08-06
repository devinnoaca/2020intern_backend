const conn = require('../lib/conn');
const keywordQuery = require('../../queries/user/keywordQuery')

const getTotalKeyword = async (usn) => {	
	let data = await conn.connection(keywordQuery.gettotalkeyword, [usn]);
  return data;
}

const getRecommendKeyword = async (usn) => {	
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
	let data = await conn.connection(keywordQuery.getKeyword, [category_ID]);
  return data;
}

const updateTotalKeyword = async (data_array) => {
	let query = keywordQuery.insertTotalKeyword;
	let form_data = [];
	for(i=0; i<data_array[1].length; i++) {
		if(i==data_array[1].length -1){
			query += `(?, ?)`
		} else {
			query += `(?, ?),`
		}
		form_data.push(data_array[0], data_array[1][i]);
	}

	let data = await conn.connection(query, form_data);
  return data;
}

const deleteTotalKeyword = async (data_array) => {
	let data = await conn.connection(keywordQuery.deleteTotalKeyword, data_array);
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
}
