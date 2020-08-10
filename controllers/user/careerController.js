const user = require('../../models/user/careerDAO');

const getUserCareer = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  let careers = new Set();
  try {
    let career = await user.getCareer(usn);

    for (let i = 0; i < career[0].length; i++) {
      careers.add(career[0][i].content);
    }
    let data = {};
    data.career = [...career[0]]
    return res.status(200).send(data);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

const handleUserCareer = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let career = req.body.career;

  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }
  if(career === "undefined") {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }
  if(career === "") {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  try {
    let _career = await user.handleCareer(career);
    return res.status(200).send(_career);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getUserCareer,
  handleUserCareer,
}
