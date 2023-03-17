const express = require("express");
const cors = require("cors"); // Needed to make requests from Angular to API on different servers
const path = require("path");
const passport = require("passport");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Create, configor and start the Express application
var app = express();

require("./config/database");
require("./models/userModel");
require("./models/carModel");
require("./config/passport")(passport);

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allows our Angular application to make HTTP requests to Express application
app.use(cors());
// Where Angular builds to - In the ./angular/angular.json file, you will find this configuration
// at the property: projects.angular.architect.build.options.outputPath
// When you run `ng build`, the output will go to the ./public directory
// app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/routes"));

// Server listens on http://localhost:3000
app.listen(port, () => console.log(`Server started on port ${port}`));
