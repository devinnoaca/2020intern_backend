const conn = require('../lib/conn');
const paramsCheck = require('../../lib/paramsCheck');
const careerQuery = require('../../queries/user/careerQuery');

const getCareerDAO = async (reqDataObject) => {
  let usn = reqDataObject.usn;
  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }

  if (paramsCheck.omissionCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let getCareerBindValue = [ usn ];
	let DBData = await conn.connection(careerQuery.getCareerQuery, getCareerBindValue);
  return DBData;
}

const handleCareerDAO = async (reqDataObject) => {
  let career = reqDataObject.career;

  if (paramsCheck.numberCheck([]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }

  if (paramsCheck.omissionCheck([career]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }


  let insertCareerQuery = careerQuery.createCareerQuery,
      insertCareerQueryBindValue = [],
      insertFlag = false;

  let updateCareerQuery = careerQuery.updateCareerQuery,
      updateCareerQueryEnd = careerQuery.updateCareerWhereQuery,
      updateCareerQueryBindValueCase = [],
      updateCareerQueryBindValueWhere = [],
      updateFlag = false;

  let deleteCareerQuery = careerQuery.deleteCareerQuery,
      deleteCareerQueryBindValue = [],
      deleteFlag = false;

  // 다중 질의문을 위한 query 변수와 bindValue 배열 선언
  let query = ``, careerBindValue = [];

  for (let i = 0; i < career.length; i++) {
    if (career[i].content === "" || career[i].type === null) continue;
    // career 배열에 담긴 객체의 타입 별로 삽입, 수정, 삭제의 질의문과 바인드 값 추가
    switch (career[i].type) {
      case 0:
        if (!insertFlag) insertFlag = true;
        insertCareerQuery += `(?, ?),`;
        insertCareerQueryBindValue.push(career[i].content, career[i].user_USN);
        break;
      case 1:
        if (!updateFlag) updateFlag = true;
        updateCareerQuery += careerQuery.updateCareerWhenQuery;
        updateCareerQueryEnd += `?,`;
        updateCareerQueryBindValueCase.push(career[i].ID, career[i].content);
        updateCareerQueryBindValueWhere.push(career[i].ID);
        break;
      case 2:
        if (!deleteFlag) deleteFlag = true;
        deleteCareerQuery += `(?),`;
        deleteCareerQueryBindValue.push(career[i].ID);
        break;
    }
  }
  if (insertFlag) {
    insertCareerQuery = insertCareerQuery.slice(0, -1);
    insertCareerQuery += `;`;
    query += insertCareerQuery;
    careerBindValue = careerBindValue.concat(insertCareerQueryBindValue);
  }

  if (updateFlag) {
    updateCareerQuery += updateCareerQueryEnd;
    updateCareerQuery = updateCareerQuery.slice(0, -1);
    updateCareerQuery += `);`;
    query += updateCareerQuery;
    careerBindValue = careerBindValue.concat(updateCareerQueryBindValueCase, updateCareerQueryBindValueWhere);
  }

  if (deleteFlag) {
    deleteCareerQuery = deleteCareerQuery.slice(0, -1);
    deleteCareerQuery += `);`;
    query += deleteCareerQuery;
    careerBindValue = careerBindValue.concat(deleteCareerQueryBindValue);
  }
  if (query.length === 0) return;
  let DBData = await conn.connection(query, careerBindValue);
  return DBData;
}

module.exports = {
  getCareerDAO,
  handleCareerDAO,
}
