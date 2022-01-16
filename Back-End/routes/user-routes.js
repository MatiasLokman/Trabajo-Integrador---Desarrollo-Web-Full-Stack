const express = require("express");
const userRouter = express.Router();
const {
  appRoutePostTimestampMiddleware,
} = require("../middleware/appMiddleware");

const userController = require("../controllers/userController");

userRouter.get("/api/users", userController.getUserAll);

module.exports = userRouter;
