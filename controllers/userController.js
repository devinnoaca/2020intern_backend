const userDAO = require('../models/userDAO');
const careerDAO = require('../models/careerDAO');
 
exports.getUsers = async (req, res, next) => {
    let usn  = parseInt(req.params.usn, 10);
    if (Number.isNaN(usn)) return res.status(400).end();

    let careers = new Set();

    try {
        let users = await userDAO.getUser(usn);
        let career = await careerDAO.getCareer(usn);
        //console.log(users[0]);
        //console.log(career[0].length);

        for(i=0; i<career[0].length; i++) {
            careers.add(career[0][i].career);
        }

        return res.send({user: users[0], career: [...careers]});
        //return res.render('user', {user: users[0], career: [...careers]});
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