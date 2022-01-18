const nodemailer = require("nodemailer");
const Item = require("../Models/Item");
const User = require("../Models/User");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "focus.app123@gmail.com",
    pass: "Kalaanakal123"
  }
});

// send email

module.exports = async (notification) => {
  console.log({ notification });
  const user = await User.findById(notification.userId);
  const item = await Item.findById(notification.itemId);
  if (!user || !item) return;
  const html = `
  <p>Hi, ${user.firstName}</p>
  <p>${item.name} is expiring on ${item.expiryDate}</p>  
  `;
  await transporter.sendMail({
    from: "focus.app123@gmail.com",
    to: user.email,
    subject: "Expiration Alert",
    html
  });
};
