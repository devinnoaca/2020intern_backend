const conn = require('../lib/conn');
const careerQuery = require('../../queries/user/careerQuery');

const getCareer = async (usn) => {
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(careerQuery.getCareer, [usn]);
  return data;
}

const updateCareer = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
	}
	let data = await conn.connection(careerQuery.insertCareer, data_array);
  return data;
}

const deleteCareer = async (data_array) => {
	if ((data_array === "undefined") || (data_array === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
	}

	let data = await conn.connection(careerQuery.insertCareer, data_array);
  return data;
}

module.exports = {
  getCareer,
  updateCareer,
  deleteCareer,
}
