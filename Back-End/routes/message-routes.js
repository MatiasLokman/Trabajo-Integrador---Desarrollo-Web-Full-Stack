const express = require("express");
const messageRouter = express.Router();
const {
  appRoutePostTimestampMiddleware,
} = require("../middleware/appMiddleware");

const messageController = require("../controllers/messageController");

messageRouter.get(
  "/api/users/<username>/messages/inbox",
  messageController.receivedMessagesById
);
messageRouter.get(
  "/api/users/<username>/messages/sent",
  messageController.sentMessagesById
);
messageRouter.post(
  "/api/users/<username>/messages",
  messageController.SendMessageToId
);

module.exports = messageRouter;
