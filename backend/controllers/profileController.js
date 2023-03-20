const mongoose = require("mongoose");
const User = mongoose.model("User");
const auth = require("../middleware/authMiddleware");
const asyncHandler = require("express-async-handler");

const getProfile = asyncHandler(async (req, res) => {
  const { user, username } = extractCommonVariables(req);
  // if (!auth.URLAuthenticated(user, username, res)) {
  //   return;
  // }
  return res.status(200).json({ success: true, user: user });
});

const getCars = asyncHandler(async (req, res) => {
  const { user, username } = extractCommonVariables(req);
  // if (!auth.URLAuthenticated(user, username, res)) {
  //   return;
  // }
  return res.status(200).json({ success: true, cars: user.cars });
});

const updateProfile = asyncHandler(async (req, res) => {
  const { user } = extractCommonVariables(req);

  const updatedUser = await User.updateOne({ _id: user._id }, req.body, {
    new: true,
  });

  return res.status(200).json({ success: true, updatedUser: updatedUser });
});

const deleteProfile = asyncHandler(async (req, res) => {
  const { user } = extractCommonVariables(req);

  const deletedUser = await User.deleteOne({ _id: user._id });

  return res.status(200).json({ success: true, deletedUser: deletedUser });
});

// Helper functions
const extractCommonVariables = (req) => {
  const user = req.user;
  const { username } = req.params;
  return { user, username };
};

module.exports = {
  getProfile,
  getCars,
  updateProfile,
  deleteProfile,
};
