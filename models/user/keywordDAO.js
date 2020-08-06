const pool = require('../../database/pool');
const keywordQuery = require('../../queries/user/keywordQuery')

const getTotalKeyword = async (usn) => {
	try {
		let data = await pool.query(keywordQuery.gettotalkeyword, [usn]);
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
}

const getRecommendKeyword = async (usn) => {
	try {
		let data = await pool.query(keywordQuery.getRecommendKeyword, [usn]);
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
}

const getAllKeywords = async () => {
	try {
		let data = await pool.query(keywordQuery.getAllKeyword);
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
}

const getCategory = async () => {
	try {
		let data = await pool.query(keywordQuery.getCategory);
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
}

const getKeyword = async (category_ID) => {
	try {
		let data = await pool.query(keywordQuery.getKeyword, [category_ID]);
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
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
	try {
		let data = await pool.query(query, form_data);
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
}

const deleteTotalKeyword = async (data_array) => {
	try {
		let data = await pool.query(keywordQuery.deleteTotalKeyword, data_array);
		return data;
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
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
