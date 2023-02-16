const mongoose = require("mongoose");

const getProfile = (req, res, next) => {
  // Make it use param
  res.status(200).json({ success: true, user: req.user });
  // res.status(200).json({ success: true, user: req.user.populate("cars") });
};

const updateProfile = (req, res, next) => {
  return res.status(200).json({ success: true, msg: "Update user" });
};

module.exports = {
  getProfile,
  updateProfile,
};
