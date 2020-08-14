const conn = require('../lib/conn');
const paramsCheck = require('../../lib/paramsCheck');
const userQuery = require('../../queries/user/userQuery');

const getUserDAO = async (reqDataObject) => {
  let usn = reqDataObject["usn"];
  if (paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }

  if (paramsCheck.omissionCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let userBindValue = [ usn ];
  let dbData = await conn.connection(userQuery.getUserQuery, userBindValue);
  return await dbData;
}

const getUserIdDAO = async (reqDataObject) => {
  if (paramsCheck.numberCheck([]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }

  if (paramsCheck.omissionCheck([reqDataObject]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }

  let userBindValue = [ reqDataObject ];
  let dbData = await conn.connection(userQuery.getUserIdQuery, userBindValue);
  return await dbData;
}

const updateUserDAO = async (reqDataObject) => {
  if (paramsCheck.numberCheck([]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 정수가 아닌 파라미터` })
  }

  if (paramsCheck.omissionCheck([reqDataObject]) === false) {
    return res.status(500).json({ statusCode: 502, message: `Model: 파라미터 누락` })
  }
  
  let userBindValue = [reqDataObject.name, reqDataObject.email, reqDataObject.imageURL, reqDataObject.description, reqDataObject.company, reqDataObject.usn]
  let dbData = await conn.connection(userQuery.updateUserQuery, userBindValue);
  return dbData;
}

module.exports = {
  getUserDAO,
  getUserIdDAO,
  updateUserDAO,
}




// exports.deleteComment = async (boardId, commentId) => {
//     let conn = await pool.getConnection()
//     try {
//         await conn.beginTransaction()

//         let del = await conn.query(BoardQuery.deleteComment, [commentId])
//         if (del[0].affectedRows == 1) {
//             let upd = await conn.query(BoardQuery.minusCommentCnt, [boardId])
//         }
//         await conn.commit()

//         return del[0]
//     } catch (err) {
//         conn.rollback()
//         console.log(err)
//         throw Error(err)
//     } finally {
//         conn.release()
//     }
// }
