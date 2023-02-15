const mongoose = require("mongoose");

const getProfile = (req, res, next) => {
  res.status(200).json({ success: true, user: req.user });
};

const updateProfile = (req, res, next) => {
  return res.status(200).json({ success: true, msg: "Update user" });
};

module.exports = {
  getProfile,
  updateProfile,
};
