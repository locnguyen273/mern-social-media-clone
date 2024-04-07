const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const auth = asyncHandler(async (req, res, next) => {
  let token;
  if(req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers?.authorization.split(" ")[1];
    try {
      if(token) {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await Users.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (err) {
      res.status(404).json({ message: "Invalid token" });
    }
  } else {
    throw new Error("Không có token trong header");
  }
});

module.exports = auth;
