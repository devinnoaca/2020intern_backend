const userDAO = require('../../models/user/userDAO');

const getUserController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn) || (usn === "undefined") || (usn === "")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  let userBindValue = [usn];

  try {
    let users = await userDAO.getUserDAO(userBindValue);
    return res.status(200).send(users[0][0]);
    // return res.render('user', {user: users[0]});
    // res.json(users[0][0]);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateUserController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let email = req.body.email;
  let name = req.body.name;
  let image_url = req.body.image_url;
  let description = req.body.description;
  let company = req.body.company;

  if (Number.isNaN(usn)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  if ((usn === "undefined") || (email === "undefined") || (name === "undefined") || (image_url === "undefined") || (description === "undefined") || (company === "undefined")) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 데이터 형태' });
  }

  if ((usn === "")  || (email === "") || (name === "") || (image_url === "") || (description === "") || (company === "")) {
    return res.status(200).json({ statusCode: 500, message: '값이 없음' });
  }

  let userBindValue = [name, email, image_url, description, company, usn];
  
  try {
    let userResult = await userDAO.updateUserDAO(userBindValue);
    return res.status(201).send(userResult);
  } catch (err) {
    return res.status(500).json(err);
  }
}

// exports.deleteUser = async (req, res, next) => {
//     let { boardId, commentId } = req.params
//     try {
//         let del = await BoardService.deleteComment(boardId, commentId)
//         return res.json(del)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

module.exports = {
  getUserController,
  updateUserController,
}
