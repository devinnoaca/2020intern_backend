const keywordListDAO = require('../../models/main/keywordListDAO');
const keywordLogicLib = require('../lib/keyword');

const getKeywordListController = async (req, res, next) => {
  try {
    let categoryResult = await keywordListDAO.getCategoryDAO();
    let keywordResult = await keywordListDAO.getKeywordDAO();
    console.log(keywordResult);
    let allKeywordLib = keywordLogicLib.keywordLogic(categoryResult, keywordResult);
    let data = {
      "allCategory": allKeywordLib,
    }
    return res.status(200).send(data);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getKeywordListController,
}