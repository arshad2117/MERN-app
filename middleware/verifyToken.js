const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/User");

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader.split(" ")[1];
  if (!token) res.status(403);
  try {
    const verified = jwt.verify(token, keys.jwtSecret);
    User.findById(verified.id).then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(403);
      }
    });
  } catch (err) {
    res.status(403);
  }
};

module.exports = verifyToken;
