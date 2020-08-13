const keywordListDAO = require('../../models/main/keywordListDAO');
const keywordLogicLib = require('../lib/keyword');
const paramsCheck = require('../../lib/paramsCheck');

const getKeywordListController = async (req, res, next) => {
  if(paramsCheck.numberCheck([]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  }
  else if(paramsCheck.omissionCheck([]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    try {
      let categoryResult = await keywordListDAO.getCategoryDAO();
      let keywordResult = await keywordListDAO.getKeywordDAO();
      let allKeywordLib = keywordLogicLib.keywordLogic(categoryResult, keywordResult);
      let allKeywordResult = {
        "allCategory": allKeywordLib,
      }
      return res.status(200).send(allKeywordResult);
      //return res.render('career', {usn: usn, career: [...careers]});
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = {
  getKeywordListController,
}
