const Users = require('../models/User');
const Keyword = require('../models/Keyword');
const Career = require('../models/Career');

module.exports = {
    doGetUser: function(req, res, next) {
        let id = req.params.usn;
        Users.get(id, function(err, user){
            //if(err) throw err;
            console.log(user[0]);
            res.render('user', {user: user[0]})
        })
    },
    doGetTotalKeyword: function(req, res, next) {
        let id = req.params.usn;
        Keyword.total_get(id, function(err, Keyword){
            res.render('total_keyword', {keyword: Keyword})
        })
    },
    doGetRecommendKeyword: function(req, res, next) {
        let id = req.params.usn;
        Keyword.recommend_get(id, function(err, Keyword){
            res.render('recommend_keyword', {keyword: Keyword})
        })
    },
    doGetCareer: function(req, res, next) {
        let id = req.params.usn;
        Career.get(id, function(err, career){
            res.render('career', {career: career[0]})
        })
    },
}