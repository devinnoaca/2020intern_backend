exports.insertNotification = `
INSERT 
INTO Notification(
 type, 
 message) 
VALUES (?, ?);`;

exports.insertUserNotification = `
INSERT
INTO User_notification(
	noti_ID,
	time,
	sender_USN,
	receiver_USN,
	matching_ID)
VALUES (?, ?, ?, ?, ?);`;