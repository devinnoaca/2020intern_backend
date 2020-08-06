exports.insertNotification = `
INSERT 
INTO Notification(
 type, 
 message) 
VALUES (?, ?);`;