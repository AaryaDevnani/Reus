const Notification = require("../Models/Notification");
const sendNotification = require("./sendNotification");

module.exports = async () => {
  const curDate = Date.now();
  const notifications = await Notification.find({ dueAt: { $lte: curDate } });
  notifications.map(async notification => {
    await sendNotification(notification);
    await Notification.deleteOne({_id: notification._id})
  });
};
