const Notification = require("../Models/Notification");

const oneDayTime = 24 * 60 * 60 * 1000;

module.exports = function async(expiryDate, userId, itemId) {
  const times = [1, 2, 3, 7, 14, 30];

  times.map(async time => {
    let date = new Date(expiryDate);
    let pastDate = date.getDate() - time
    date.setDate(pastDate)
    

    const notification = new Notification({
      userId,
      itemId,
      expiryDate,
      dueAt: date
    });
    await notification.save();
  });
};