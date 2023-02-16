const mongoose = require("mongoose");
const Car = mongoose.model("Car");

const setCar = (req, res, next) => {
  const car = new Car({
    brand: req.body.brand,
    model: req.body.model,
    colour: req.body.colour,
    trim: req.body.trim,
    options: req.body.options,
    owner: req.user.id,
  });

  try {
    // car.save();

    res.status(200).json({ success: true, msg: car });
  } catch (err) {
    res.json({ success: false, msg: err });
  }

  // res.status(200).json({ success: true, msg: car });
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
