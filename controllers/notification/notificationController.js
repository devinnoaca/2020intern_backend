const notificationDAO = require('../../models/notification/notificationDAO');

const createNotification = async (req, res, next) => {
  let noti_type = parseInt(req.body.type, 10);
  let message = req.body.message;

  if(Number.isNaN(noti_type)) {
    return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
  }

  let create = [noti_type, message];

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