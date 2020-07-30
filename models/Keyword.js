const mysql_abc = require('../config/db_connection')();
const connection = mysql_abc.init();
mysql_abc.connect(connection);

module.exports = {
  total_get: (usn, callback) => {
    let query = `SELECT * FROM User_total_keyword WHERE utk_USN = ?`
    let params = [];
    if(usn != null) {
      params = [usn];
    }
    connection.query(query, params, callback);
  },
  recommend_get: (usn, callback) => {
    // Recommend_keyword, User, Keyword 테이블을 조인한다
    let query = 
    `SELECT * FROM Recommend_keyword 
    JOIN User 
    ON Recommend_keyword.rk_USN = User.USN 
    JOIN Keyword
    ON Recommend_keyword.rk_keyword_ID = Keyword.keyword_ID
    WHERE rk_USN = ?`
    let params = [];
    if(usn != null) {
      params = [usn];
    }
    connection.query(query, params, callback);
  }
}