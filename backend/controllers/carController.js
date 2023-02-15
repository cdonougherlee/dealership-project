const mongoose = require("mongoose");

const setCar = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Set car works" });
};

const viewCar = (req, res, next) => {
  return res.status(200).json({ success: true, msg: "Viewacar user" });
};

const updateCar = (req, res, next) => {
  return res.status(200).json({ success: true, msg: "updateCar user" });
};

const deleteCar = (req, res, next) => {
  return res.status(200).json({ success: true, msg: "deleteCar user" });
};

module.exports = {
  setCar,
  viewCar,
  updateCar,
  deleteCar,
};
