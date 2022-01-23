const User = require("../model/user-model");
const http = require("http-status-codes");
const Message = require("../model/message-model");
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
    const { id } = req.params;
  
    const result = await Message.findOne({
      where: {
        id: id,
      },
      include: User,
    });
    res.json({ result });
};

// -----------------------------------------------------------------------------------------------------------------------//

const sentMessagesById = async (req, res) => {
    const { id } = req.params;
  
    const result = await Message.findOne({
      where: {
        id: id,
      },
      include: User,
    });
    res.json({ result });
};

// -----------------------------------------------------------------------------------------------------------------------//

const SendMessageToId = async (req, res) => {
    const data = ({ message, id_user, id_receiver } = req.body);
  
    const message = await Message.create(data);
    res.json({ status: http.StatusCodes.OK, data: message });
};

// -----------------------------------------------------------------------------------------------------------------------//

module.exports = {
  getUserAll,
  receivedMessagesById,
  sentMessagesById,
  SendMessageToId,
};
