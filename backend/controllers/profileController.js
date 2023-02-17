const mongoose = require("mongoose");
const User = mongoose.model("User");
const auth = require("../middleware/authMiddleware");
const asyncHandler = require("express-async-handler");

const getProfile = asyncHandler(async (req, res) => {
  const { user, username } = extractCommonVariables(req);
  if (!auth.URLAuthenticated(user, username, res)) {
    return;
  }
  res.status(200).json({ success: true, user: user });
});

const updateProfile = asyncHandler(async (req, res) => {
  const { user, username } = extractCommonVariables(req);
  if (!auth.URLAuthenticated(user, username, res)) {
    return;
  }

  const updatedUser = await User.updateOne({ _id: user._id }, req.body, {
    new: true,
  });

  return res.status(200).json({ success: true, updatedUser: updatedUser });
});

// Helper functions
const extractCommonVariables = (req) => {
  const user = req.user;
  const { username } = req.params;
  return { user, username };
};

module.exports = {
  getProfile,
  updateProfile,
};
