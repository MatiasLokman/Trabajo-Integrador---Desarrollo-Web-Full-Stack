const express = require("express");
const userRouter = express.Router();
const {
  appRoutePostTimestampMiddleware,
} = require("../middleware/appMiddleware");

const userController = require("../controllers/userController");

userRouter.post("/api/user", userController.createUser);
userRouter.get("/api/users", userController.getUserAll);
userRouter.get("/api/user/:id", userController.getUserByid);
userRouter.put(
  "/api/user/:id/firstname/:firstname/lastname/:lastname",
  userController.updateUser
);
userRouter.delete("/api/user/:id", userController.deleteUser);

// userRouter.get("/api/users", userController.getUserAll);
// userRouter.post("/api/users", userController.createUser);
// userRouter.get(
//   "/api/users/<username>/messages/inbox",
//   userController.getUserByid
// );
// userRouter.get(
//   "/api/users/<username>/messages/sent",
//   userController.getPostsUserById
// );
// userRouter.post(
//   "/api/users/<username>/messages",
//   userController.getEstadistica
// );

module.exports = userRouter;
