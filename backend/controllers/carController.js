const mongoose = require("mongoose");
const Car = mongoose.model("Car");
const asyncHandler = require("express-async-handler");
const auth = require("../middleware/authMiddleware");

const createCar = asyncHandler(async (req, res) => {
  const { user, username } = extractCommonVariables(req);
  if (!auth.URLAuthenticated(user, username, res)) {
    return;
  }

  // Create car
  const { brand, model, colour, trim, options } = req.body;

  // For future db implementation
  // const car = await Car.create({
  //   brand: brand,
  //   model: model,
  //   colour: colour,
  //   trim: trim,
  //   options: options,
  //   owner: user.id,
  // });

  const car = Car({
    brand: brand,
    model: model,
    colour: colour,
    trim: trim,
    options: options,
    owner: user.id,
  });

  // If car successfully created, push to user's (owner) car array
  if (car) {
    user.cars.push(car);
    user.save();
    return res.status(200).json({ success: true, msg: car });
  } else {
    // Else return invalid data error
    return res.status(400).json({ success: false, msg: "Invalid user data" });
  }
});

const viewCar = asyncHandler(async (req, res) => {
  const { user, id, username } = extractCommonVariables(req);
  if (!auth.URLAuthenticated(user, username, res)) {
    return;
  }

  // Get requested car from user's cars array[index]
  const car = await Car.findOne({ _id: id });

  if (car) {
    return res.status(200).json({ success: true, car: car });
  } else {
    return res.json({ success: false, msg: "Car not found" });
  }
});

const updateCar = asyncHandler(async (req, res) => {
  const { user, index, username } = extractCommonVariables(req);
  if (!auth.URLAuthenticated(user, username, res)) {
    return;
  }

  // Update requested car from user's cars array[index]
  const updatedCar = (user.cars[index] = req.body);
  user.save();

  if (updatedCar) {
    return res.status(200).json({ success: true, car: updatedCar });
  } else {
    return res
      .status(400)
      .json({ success: false, msg: "Car not found or invalid data" });
  }
});

const deleteCar = asyncHandler(async (req, res) => {
  const { user, index, username } = extractCommonVariables(req);
  if (!auth.URLAuthenticated(user, username, res)) {
    return;
  }

  // Delete requested car from user's cars array[index]
  const deletedCar = user.cars.splice(index, 1);
  user.save();

  if (deletedCar) {
    return res.status(200).json({ success: true, car: deletedCar });
  } else {
    return res.status(400).json({ success: false, msg: "Car not found" });
  }
});

// Helper functions
const extractCommonVariables = (req) => {
  const user = req.user;
  const { index, username } = req.params;
  return { user, index, username };
};

module.exports = {
  createCar,
  viewCar,
  updateCar,
  deleteCar,
};
