const keyword = require('../../models/user/keywordDAO');
const { all } = require('../../app');

exports.getKeywords = async (req, res, next) => {
    let usn  = parseInt(req.params.usn, 10);
    if(Number.isNaN(usn)){
      return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
    }
    try {
        let total = await keyword.getTotalKeyword(usn);
        let recommend = await keyword.getRecommendKeyword(usn);

        let _total = new Array();
        let _recommend = new Array();

        for(i=0; i<total[0].length; i++) {
          _total.push({
            "keywordId" : total[0][i].keyword_ID,
            "categoryName" : total[0][i].category_name,
            "keywordName" : total[0][i].keyword_name
          });
        }

        for(i=0; i<recommend[0].length; i++) {
          _recommend.push({
            "keywordId" : recommend[0][i].keyword_ID,
            "categoryName" : recommend[0][i].category_name,
            "keywordName" : recommend[0][i].keyword_name
          });
        }

        let _keyword = {
          "usn" : usn,
          "allKeyword" : _total,
          "recommendKeyword": _recommend
        }

        return res.status(200).send(_keyword);
        //return res.render('keyword', {total: [...total_keywords], recommend: [...recommend_keywords]});
    } catch (err) {
        return res.status(500).json(err)
    }
}