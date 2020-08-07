exports.insertNotification = `
INSERT 
INTO Notification(
 type, 
 message) 
VALUES (?, ?);`;

exports.insertUserNotification = `
INSERT
INTO User_notification(
	time,
	noti_ID,
	sender_USN,
	receiver_USN,
	is_checked)
VALUES (?, ?, ?, ?, ?);`;