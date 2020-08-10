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

  // 삽입, 수정, 삭제마다 질의문을 담는 스트링 변수와 바인드 값을 담는 배열 선언
  let insertCareerQuery = careerQuery.createCareer, insertCareerQueryBindValue = [];

  let updateCareerQuery = careerQuery.updateCareer;
  let updateCareerQueryBindValueCase = [], updateCareerQueryBindValueWhere = [];
  let updateCareerQueryEnd = careerQuery.updateCareerWhere;

  let deleteCareerQuery = careerQuery.deleteCareer, deleteCareerQueryBindValue = [];

  // 다중 질의문을 위한 query 변수와 bindValue 배열 선언
  let query = ``, bindValue = [];

  for (let i = 0; i < career.length; i++) {

    // career 배열에 담긴 객체의 타입 별로 삽입, 수정, 삭제의 질의문과 바인드 값 추가
    switch (career[i].type) {
      case 0:
        insertCareerQuery += `(?, ?),`;
        insertCareerQueryBindValue.push(career[i].content, career[i].user_USN);
        break;
      case 1:
        updateCareerQuery += careerQuery.updateCareerWhen;
        updateCareerQueryBindValueCase.push(career[i].ID, career[i].content);
        updateCareerQueryEnd += `?,`;
        updateCareerQueryBindValueWhere.push(career[i].ID);
        break;
      case 2:
        deleteCareerQuery += `(?),`;
        deleteCareerQueryBindValue.push(career[i].ID);
        break;
    }

    // 반복문 마지막 실행 시 삽입, 수정, 삭제할 경력의 유무에 따라 조건문 실행
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
