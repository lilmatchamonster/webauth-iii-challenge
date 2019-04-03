const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwtSecret.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: "User not verified, please try again."})
      }
      else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  }
  else {
    res.status(401).json({ message: "User not verified, please try again."})
  }
};