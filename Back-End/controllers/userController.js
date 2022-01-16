const User = require("../model/user-model");
// const Post = require("../model/post-model-seq");
const http = require("http-status-codes");
// const sequelize = require("../database/integradorConnection");
// const { QueryTypes } = require("sequelize");

// -----------------------------------------------------------------------------------------------------------------------//

const getUserAll = async (req, res) => {
  // const users = await User.findAll();
  const users = await User.findAndCountAll();
  res.json({ status: true, data: users });
};

// -----------------------------------------------------------------------------------------------------------------------//

const receivedMessagesById = async (req, res) => {
  //  ...
};

// -----------------------------------------------------------------------------------------------------------------------//

const sentMessagesById = async (req, res) => {
  //  ...
};

// -----------------------------------------------------------------------------------------------------------------------//

const SendMessageToId = async (req, res) => {
  //  ...
};

// -----------------------------------------------------------------------------------------------------------------------//

module.exports = {
  getUserAll,
  receivedMessagesById,
  sentMessagesById,
  SendMessageToId,
};
