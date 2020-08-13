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

exports.getUserNotificationQuery = `
SELECT
  User_notification.ID,
  User_notification.matching_ID,
  User_notification.time,
  User_notification.is_checked,
  Matching.state,
  Matching.mentee_USN,
  Matching.mentor_USN
FROM
  User_notification JOIN Matching
  ON User_notification.matching_ID = Matching.ID
WHERE Matching.
`

exports.getUserNotificationQueryOrderBy = `
ORDER BY User_notification.time DESC
`
