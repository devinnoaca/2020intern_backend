const conn = require('../lib/conn');
const keywordQuery = require('../../queries/user/keywordQuery');

const getTotalKeywordDAO = async (reqDataObject) => {
	let usn = reqDataObject['usn'];
	if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
  let totalKeywordBindValue = [ usn ];
	let DBData = await conn.connection(keywordQuery.gettotalkeywordQuery, totalKeywordBindValue);
  return DBData;
}

const getRecommendKeywordDAO = async (reqDataObject) => {
	let usn = reqDataObject['usn'];
	if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
  let recommendKeywordBindValue = [ usn ];
	let DBData = await conn.connection(keywordQuery.getRecommendKeywordQuery, recommendKeywordBindValue);
  return DBData;
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

const updateTotalKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let insertKeywords = reqDataObject.keyword.insertKeywords;
  let deleteKeywords = reqDataObject.keyword.deleteKeywords;
	// if ((dateArray === "undefined") || (dateArray === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	// }

	let insertQuery = keywordQuery.insertTotalKeywordQuery;
	let deleteQuery = keywordQuery.deleteTotalKeywordQuery;

	let totalKeywordBindValue = [];
	for (let i = 0; i < insertKeywords.length; i++) {
		if ( i == insertKeywords.length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		totalKeywordBindValue.push(usn, insertKeywords[i]);
	}

	for (let i=0; i < deleteKeywords.length; i++) {
		if (i == deleteKeywords.length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		totalKeywordBindValue.push(usn, deleteKeywords[i]);
	}

	let DBData = await conn.connection(insertQuery + deleteQuery, totalKeywordBindValue);
  return DBData;
}


const insertTotalKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let insertKeywords = reqDataObject.keyword.insertKeywords;
	// if ((dataArray === "undefined") || (dataArray === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	// }
	let insertTotalKeywordBindValue = [];
	let insertQuery = keywordQuery.insertTotalKeywordQuery;
	for (let i = 0; i < insertKeywords.length; i++) {
		if (i == insertKeywords.length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		insertTotalKeywordBindValue.push(usn, insertKeywords[i]);
	}
	let DBData = await conn.connection(insertQuery, insertTotalKeywordBindValue);
  return DBData;
}

const deleteTotalKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let deleteKeywords = reqDataObject.keyword.deleteKeywords;
	// if ((dataArray === "undefined") || (dataArray === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	// }
	let deleteTotalKeywordBindValue = [];
	let deleteQuery = keywordQuery.deleteTotalKeywordQuery;
	for (let i = 0; i < deleteKeywords.length; i++) {
		if (i == deleteKeywords.length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		deleteTotalKeywordBindValue.push(usn, deleteKeywords[i]);
	}

	let DBData = await conn.connection(deleteQuery, deleteTotalKeywordBindValue);
  return DBData;
}

const updateRecommendKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let insertKeywords = reqDataObject.keyword.insertKeywords;
  let deleteKeywords = reqDataObject.keyword.deleteKeywords;
	// if ((dataArray === "undefined") || (dataArray === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	// }

	let insertQuery = keywordQuery.insertRecommendKeywordQuery;
	let deleteQuery = keywordQuery.deleteRecommendKeywordQuery;

	let recommendKeywordBindValue = [];
	for (let i = 0; i < insertKeywords.length; i++) {
		if (i == insertKeywords.length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		recommendKeywordBindValue.push(usn, insertKeywords[i]);
	}

	for (let i = 0; i < deleteKeywords.length; i++) {
		if (i == deleteKeywords.length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		recommendKeywordBindValue.push(usn, deleteKeywords[i]);
	}
	let DBData = await conn.connection(insertQuery + deleteQuery, recommendKeywordBindValue);
  return DBData;
}

const insertRecommendKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let insertKeywords = reqDataObject.keyword.insertKeywords;
	// if ((dataArray === "undefined") || (dataArray === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	// }
	let insertRecommendKeywordBindValue = [];
	let insertQuery = keywordQuery.insertRecommendKeywordQuery;
	for (let i = 0; i < insertKeywords.length; i++) {
		if (i == insertKeywords.length - 1) {
			insertQuery += `(?, ?);`;
		} else {
			insertQuery += `(?, ?), `;
		}
		insertRecommendKeywordBindValue.push(usn, insertKeywords[i]);
	}
	let DBData = await conn.connection(insertQuery, insertRecommendKeywordBindValue);
  return DBData;
}

const deleteRecommendKeywordDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  let deleteKeywords = reqDataObject.keyword.deleteKeywords;
	// if ((dataArray === "undefined") || (dataArray === "")) {
  //   return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
	// }
	let deleteRecommendKeywordBindValue = [];
	let deleteQuery = keywordQuery.deleteRecommendKeywordQuery;
	for (let i = 0; i < deleteKeywords.length; i++) {
		if (i == deleteKeywords.length - 1) {
			deleteQuery += `(?, ?));`;
		} else {
			deleteQuery += `(?, ?), `;
		}
		deleteRecommendKeywordBindValue.push(usn, deleteKeywords[i]);
	}

	let DBData = await conn.connection(deleteQuery, deleteRecommendKeywordBindValue);
  return DBData;
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
