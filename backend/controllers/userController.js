const mongoose = require("mongoose");
const User = mongoose.model("User");
const auth = require("../middleware/authMiddleware");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { username, prefDealer } = req.body;

  // Check all fields present
  if (!username || !prefDealer) {
    res.status(400).json({ success: false, msg: "Please fill out all fields" });
  }

  // Check if user exists
  await User.findOne({ username }).then((user) => {
    if (user) {
      res.status(400).json({ success: false, msg: "User already exists" });
    }
  });

  // Create salt and hash based off the plain text pw
  const { salt, hash } = auth.genPassword(req.body.password);

  // Create user
  const user = await User.create({
    username: username,
    hash: hash,
    salt: salt,
    prefDealer: prefDealer,
  });

  // If user successfully created, assign user JWT
  if (user) {
    const jwt = auth.genJWT(user);

    res.status(201).json({
      success: true,
      user: user,
      token: jwt.token,
      expiresIn: jwt.expires,
    });
  } else {
    // Else return invalid data error
    res.status(400).json({ success: false, msg: "Invalid user data" });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Check all fields present
  if (!username || !password) {
    res.status(400).json({ success: false, msg: "Please fill out all fields" });
  }

  // Find the user by username in the db
  await User.findOne({ username: username }).then((user) => {
    // If user doesn't exist, return unauthorized response
    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "User doesn't exist" });
    }

    // If user exists, validate password
    const isValid = auth.validPassword(password, user.hash, user.salt);

    // If password is valid, issue JWT
    if (isValid) {
      const tokenObject = auth.genJWT(user);

      res.status(200).json({
        success: true,
        user: user,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
      });
    } else {
      // Else return unauthorized response
      res.status(401).json({ success: false, msg: "Invalid credentials" });
    }
  });
});

module.exports = {
  registerUser,
  loginUser,
};
