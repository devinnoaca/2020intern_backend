const notificationDAO = require('../../models/notification/notificationDAO');

const createNotification = async (req, res, next) => {
  //let noti_ID = req.body.noti_ID;
  let noti_type = req.body.noti_type;
  let ischecked = req.body.ischecked;
  let message = req.body.message;

  let create = [noti_type, ischecked, message];

  try {
    let result = await notificationDAO.createNotification(create);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  createNotification,
}