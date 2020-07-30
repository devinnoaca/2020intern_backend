const Career = require('../models/Career');
const Keyword = require('../models/Keyword');
const Users = require('../models/User');

module.exports = {
  doGetUser: (req, res, next) => {
    let id = req.params.usn;
    Users.get(id, (err, user) => {
      res.render('user', {
        user: user[0]
      });
    });
  },
  doGetTotalKeyword: (req, res, next) => {
    let id = req.params.usn;
    Keyword.total_get(id, (err, Keyword) => {
      console.log(Keyword);
      res.render('total_keyword', { 
        keyword: Keyword
      });
    });
  },
  doGetRecommendKeyword: (req, res, next) => {
    let id = req.params.usn;
    Keyword.recommend_get(id, (err, Keyword) => {
      res.render('recommend_keyword', {
        keyword: Keyword
      });
    });
  },
  doGetCareer: (req, res, next) => {
    let id = req.params.usn;
    Career.get(id, (err, career) => {
      res.render('career', {
        career: career[0]
      });
    });
  },
}