const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const PRIV_KEY = process.env.PRIV_KEY;

//  Verify password using crypto library, decrypted with the hash using the salt
//  sha512 is a cryptographic hash algo. Provides a 32byte signature
function validPassword(password, hash, salt) {
  var hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
}

// Creates a salt and hash out of the password, store those in db instead of text pw
function genPassword(password) {
  var salt = crypto.randomBytes(32).toString("hex");
  var genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: genHash,
  };
}

// Create the JWT for the user
// The sub property is set as the user object's MongoDB _id
function genJWT(user) {
  const _id = user._id;

  const expiresIn = "1d";

  const payload = {
    sub: _id,
    iat: Math.floor(Date.now() / 1000),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}

// To check that the requesting user is the same as the username in the URL
const URLAuthenticated = (user, username, res) => {
  // Make sure logged in user matches the URI username parameter
  if (user.username !== username) {
    res.status(401).json({
      success: false,
      msg: "Requested username in URL does not match that of the currently logged in user",
    });
    return false;
  }
  return true;
};

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;
module.exports.genJWT = genJWT;
module.exports.URLAuthenticated = URLAuthenticated;
