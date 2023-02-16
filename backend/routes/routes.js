const router = require("express").Router();
const passport = require("passport");

const protect = () => passport.authenticate("jwt", { session: false });

// Destructure routes from controllers
const { registerUser, loginUser } = require("../controllers/userController");

const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

const {
  createCar,
  viewCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");

// Landing and car configurator pages don't need routes
// Logout too will be handled by frontend

// Log in and registration routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// View and update profile routes
router
  .route("/:username")
  .get(protect(), getProfile)
  .put(protect(), updateProfile);

// Save a user's car from inital car creation screen routes
router.post("/:username/car", protect(), createCar);

// View, update and delete a user's car routes
router
  .route("/:username/car/:index")
  .get(protect(), viewCar)
  .put(protect(), updateCar)
  .delete(protect(), deleteCar);

module.exports = router;
