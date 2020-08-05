exports.insertNotification = `
INSERT 
INTO Notification(
 type, 
 is_checked, 
 message) 
VALUES (?, ?, ?);`;