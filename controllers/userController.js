const user = require('../models/userDAO');

exports.getUsers = async (req, res, next) => {
    let usn  = parseInt(req.params.usn, 10);
    if (Number.isNaN(usn)) return res.status(400).end();

    let careers = new Set();

    try {
        let users = await user.getUser(usn);

        // return res.send({user: users[0], career: [...careers]});
        // return res.render('user', {user: users[0]});
        res.json(users[0][0]);
    } catch (err) {
        return res.status(500).json(err)
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
