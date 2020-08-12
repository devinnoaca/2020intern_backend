exports.insertNotificationQuery = `
INSERT 
INTO Notification(
 type, 
 message) 
VALUES (?, ?);`;

exports.insertUserNotificationQuery = `
INSERT
INTO User_notification(
	noti_ID,
	time,
	sender_USN,
	receiver_USN,
	matching_ID)
VALUES (?, ?, ?, ?, ?);`;