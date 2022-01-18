const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../Models/User");

router.post("/register", async (req, res) => {
  const { firstName, lastName, username, password, email, address } = req.body;

  //checking for unique email & username
  const emailExist = await User.findOne({ email });
  if (emailExist)
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  const usernameExists = await User.findOne({ username });
  if (usernameExists)
    return res
      .status(400)
      .json({ error: "Username already exists. Please try a different one." });

  //hashing pw
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    username,
    password: hashedPassword,
    email,
    address
  });

  try {
    newUser = await user.save();
    res.status(201).json({ error: "" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //checking for existing email
  const user = await User.findOne({ username });
  if (!user)
    return res.status(400).json({ error: "Incorrect email or password." });

  //pw validation
  const validPw = await bcrypt.compare(password, user.password);
  if (!validPw)
    return res.status(400).json({ error: "Incorrect email or password." });

  //create JWT
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.SECRET_ACCESS_TOKEN
  );
  // res.header('auth-token',token).send(token)

  res.status(201).json({ error: "", token });
});

module.exports = router;
