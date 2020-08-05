exports.insertNotification = `
INSERT 
INTO Notification(
 noti_type, 
 is_checked, 
 message) 
VALUES (?, ?, ?);`;