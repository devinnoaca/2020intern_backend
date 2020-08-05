exports.insertNotification = `
INSERT 
INTO Notification(
 noti_type, 
 ischecked, 
 message) 
VALUES (?, ?, ?);`;