const user = require('../models/userDAO');
const logger = require('../logger');

exports.getUsers = async (req, res, next) => {
    let usn  = parseInt(req.params.usn, 10);
    // if(typeof id === 'undefined'){
    //     logger.appLogger(3).log({
    //         level: 'error',
    //         message: '파라미터 누락',
    //       });
    //     return res.status(200).json({ statusCode: 500, message: '잘못된 아이템 타입' });
    // }

    // if(Number.isNaN(usn)){
    //     logger.appLogger(3).log({
    //         level: 'error',
    //         message: '잘못된 usn 타입',
    //       });
    //     return res.status(200).json({ statusCode: 500, message: '잘못된 아이템 타입' });
    // }

    try {
        let users = await user.getUser(usn);
        // logger.appLogger(3).log({
        //     level: 'info',
        //     message: `usn: ${usn}`,
        //   });
          return res.status(200).send(users[0][0]);
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
