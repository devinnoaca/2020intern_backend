const conn = require('../lib/conn');
const careerQuery = require('../../queries/user/careerQuery');

const getCareerDAO = async (usn) => {
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 502, message: '잘못된 매개변수 타입' });
  }
	let data = await conn.connection(careerQuery.getCareerQuery, [usn]);
  return data;
}

const handleCareerDAO = async (careerBindValue) => {
  let career = careerBindValue[careerBindValue.length - 1];
  if(career === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }
  if(career === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  // 삽입, 수정, 삭제마다 질의문을 담는 스트링 변수와 바인드 값을 담는 배열 선언
  let insertCareerQuery = careerQuery.createCareerQuery,
      insertFlag = false;

  let updateCareerQuery = careerQuery.updateCareerQuery,
      updateCareerQueryEnd = careerQuery.updateCareerWhereQuery,
      updateFlag = false;

  let deleteCareerQuery = careerQuery.deleteCareerQuery,
      deleteFlag = false;

  // 다중 질의문을 위한 query 변수와 bindValue 배열 선언
  let query = ``;

  for (let i = 0; i < career.length; i++) {
    if (career[i].content === "" || career[i].type === null) continue;
    // career 배열에 담긴 객체의 타입 별로 삽입, 수정, 삭제의 질의문과 바인드 값 추가
    switch (career[i].type) {
      case 0:
        if (!insertFlag) insertFlag = true;
        insertCareerQuery += `(?, ?),`;
        break;
      case 1:
        if (!updateFlag) updateFlag = true;
        updateCareerQuery += careerQuery.updateCareerWhenQuery;
        updateCareerQueryEnd += `?,`;
        break;
      case 2:
        if (!deleteFlag) deleteFlag = true;
        deleteCareerQuery += `(?),`;
        break;
    }
  }
  if (insertFlag) {
    insertCareerQuery = insertCareerQuery.slice(0, -1);
    insertCareerQuery += `;`;
    query += insertCareerQuery;
  }

  if (updateFlag) {
    updateCareerQuery += updateCareerQueryEnd;
    updateCareerQuery = updateCareerQuery.slice(0, -1);
    updateCareerQuery += `);`;
    query += updateCareerQuery;
  }

  if (deleteFlag) {
    deleteCareerQuery = deleteCareerQuery.slice(0, -1);
    deleteCareerQuery += `);`;
    query += deleteCareerQuery;
  }
  console.log(query);
  if (query.length === 0) return;

  let data = await conn.connection(query, careerBindValue);
  return data;
}

module.exports = {
  getCareerDAO,
  handleCareerDAO,
}
