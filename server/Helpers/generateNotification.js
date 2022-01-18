const Notification = require("../Models/Notification");

const oneDayTime = 24 * 60 * 60 * 100;

module.exports = function async(expiryDate, userId, itemId) {
  const notiDates = [
    new Date(expiryDate) - 1 * oneDayTime,
    new Date(expiryDate) - 2 * oneDayTime,
    new Date(expiryDate) - 3 * oneDayTime,
    new Date(expiryDate) - 7 * oneDayTime,
    new Date(expiryDate) - 14 * oneDayTime,
    new Date(expiryDate) - 30 * oneDayTime
  ];

  notiDates.map(async date => {
    const notification = new Notification({
      userId,
      itemId,
      expiryDate,
      dueAt: date
    });
    await notification.save();
  });
};
