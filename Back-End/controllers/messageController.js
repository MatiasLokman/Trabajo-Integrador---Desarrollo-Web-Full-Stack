const Message = require("../model/message-model");
const http = require("http-status-codes");

// -----------------------------------------------------------------------------------------------------------------------//

const deleteMessage = (req, res) => {
const { id_message } = req.params;
const message = await Message.findOne({where: {id_message}})
await message.destroy()
// verificar que el mensaje pertenece al usuario
// verificar que el mensaje existe
};

// -----------------------------------------------------------------------------------------------------------------------//

module.exports = {
  deleteMessage
};