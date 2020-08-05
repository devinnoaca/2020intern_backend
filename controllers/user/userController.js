const user = require('../../models/user/userDAO');
const logger = require('../../logger');

const getUsers = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  try {
    let users = await user.getUser(usn);
    return res.status(200).send(users[0][0]);
    // return res.render('user', {user: users[0]});
    // res.json(users[0][0]);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const getUpdateUser = async (req, res, next) => {

  let usn = parseInt(req.params.usn, 10);
  let email = req.body.email;
  let userName = req.body.userName;
  let image_url = req.body.image_url;
  let description = req.body.description;
  let company = req.body.company;

  let modefied = [userName, email, image_url, description, company, usn];
  try {
    let users = await user.getUpdateUser(modefied);
    return res.status(201).send(users);
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
  getUsers,
  getUpdateUser,
}
