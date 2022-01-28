const nodemailer = require("nodemailer");
const Item = require("../Models/Item");
const User = require("../Models/User");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PW
  }
});

// send email

module.exports = async (notification) => {
  console.log({ notification });
  const user = await User.findById(notification.userId);
  const item = await Item.findById(notification.itemId);
  if (!user || !item) return;
  const date = item.expiryDate.getUTCDate()
  const month = item.expiryDate.getUTCMonth()+1
  const year = item.expiryDate.getUTCFullYear()
  const fullDate = `${date}/${month}/${year}`
  const html = `
  <p>Hi, ${user.firstName}</p>
  <p>${item.name} is expiring on ${fullDate}</p>  
  `;
  const sent = await transporter.sendMail({
    from: "focus.app123@gmail.com",
    to: user.email,
    subject: "Expiration Alert",
    html
  });
  console.log({sent});
  
};
