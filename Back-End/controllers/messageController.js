const Message = require("../model/message-model");
const http = require("http-status-codes");

// -----------------------------------------------------------------------------------------------------------------------//

const deleteMessage = async (req, res) => {
const { id: id_message } = req.params;
const message = await Message.findOne({where: {id_message}})
await message.destroy()
// verificar que el mensaje pertenece al usuario
// verificar que el mensaje existe
res.json({ status: http.StatusCodes.OK, data: "Message deleted successfully"});
};

// -----------------------------------------------------------------------------------------------------------------------//

module.exports = {
  deleteMessage
};