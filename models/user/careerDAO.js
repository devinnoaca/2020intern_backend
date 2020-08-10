const conn = require('../lib/conn');
const careerQuery = require('../../queries/user/careerQuery');

const getCareer = async (usn) => {
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(careerQuery.getCareer, [usn]);
  return data;
}

const handleCareer = async (career) => {
  if(career === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }
  if(career === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let insertCareerQuery = careerQuery.createCareer, insertCareerQueryBindValue = [];

  let updateCareerQuery = careerQuery.updateCareer;
  let updateCareerQueryBindValueCase = [], updateCareerQueryBindValueWhere = [];
  let updateCareerQueryEnd = careerQuery.temp2;

  let deleteCareerQuery = careerQuery.deleteCareer, deleteCareerQueryBindValue = [];

  let query = ``, bindValue = [];

  for (let i = 0; i < career.length; i++) {
    switch (career[i].type) {
      case 0:
        insertCareerQuery += `(?, ?),`;
        insertCareerQueryBindValue.push(career[i].content, career[i].user_USN);
        break;
      case 1:
        updateCareerQuery += careerQuery.temp1;
        updateCareerQueryBindValueCase.push(career[i].ID, career[i].content);
        updateCareerQueryEnd += `?,`;
        updateCareerQueryBindValueWhere.push(career[i].ID);
        break;
      case 2:
        deleteCareerQuery += `(?),`;
        deleteCareerQueryBindValue.push(career[i].ID);
        break;
    }
    if (i === career.length - 1) {
      if (insertCareerQueryBindValue.length) {
        insertCareerQuery = insertCareerQuery.slice(0, -1);
        insertCareerQuery += `;`;

        query += insertCareerQuery;
        bindValue = bindValue.concat(insertCareerQueryBindValue);
      }
      if (updateCareerQueryBindValueCase.length) {
        updateCareerQuery += updateCareerQueryEnd;
        updateCareerQuery = updateCareerQuery.slice(0, -1);
        updateCareerQuery += `);`;
        updateCareerQueryBindValue = updateCareerQueryBindValueCase.concat(updateCareerQueryBindValueWhere);

        query += updateCareerQuery;
        bindValue = bindValue.concat(updateCareerQueryBindValue);
      }
      if (deleteCareerQueryBindValue.length) {
        deleteCareerQuery = deleteCareerQuery.slice(0, -1);
        deleteCareerQuery += `);`;

        query += deleteCareerQuery;
        bindValue = bindValue.concat(deleteCareerQueryBindValue);
      }
    }
  }
  let data = await conn.connection(query, bindValue);
  return data;
}

module.exports = {
  getCareer,
  handleCareer,
}
