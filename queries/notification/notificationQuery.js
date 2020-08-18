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
  noti_ID AS notiID,
  matching_ID AS matchingID,
  sender AS oppositeName,
  noti_time AS time,
  matching_state AS matchingState,
  is_checked AS isChecked
FROM
  get_user_notification
WHERE
  receiver_USN = ?
  AND
  sender IS NOT NULL
ORDER BY
  noti_time
  DESC
;`
