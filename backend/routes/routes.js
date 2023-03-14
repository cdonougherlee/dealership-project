const router = require("express").Router();
const passport = require("passport");

const protect = () => passport.authenticate("jwt", { session: false });

// Destructure routes from controllers
const { registerUser, loginUser } = require("../controllers/userController");

const {
  getProfile,
  getCars,
  updateProfile,
  deleteProfile,
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
  .route("/profile/:username")
  .get(protect(), getProfile)
  .put(protect(), updateProfile)
  .delete(protect(), deleteProfile);

// CRUD functionality
router
  .route("/:username/car")
  .get(protect(), getCars)
  .post(protect(), createCar);
router
  .route("/:username/car/:index")
  .get(protect(), viewCar)
  .put(protect(), updateCar)
  .delete(protect(), deleteCar);

module.exports = router;
