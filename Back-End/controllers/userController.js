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

const createUser = async (req, res) => {
  const data = ({ firstname, lastname, username, id_country } = req.body);

  const user = User.build(data);
  console.log("user: ", user);
  try {
    const result = await user.save();
    res.json({ status: http.StatusCodes.OK, data: result });
  } catch (error) {
    res.json({ status: http.StatusCodes.INTERNAL_SERVER_ERROR, data: "ERROR" });
  }
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
  createUser,
  getUserAll,
  receivedMessagesById,
  sentMessagesById,
  SendMessageToId,
};
