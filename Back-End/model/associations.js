require("dotenv").config();
const sequelize = require("../database/integradorConnection");
const User = require("./user-model");
const Message = require("./message-model");


User.hasMany(Message, { foreignKey: "id_user" });
Message.belongsTo(User, { foreignKey: "id_user" });

User.hasMany(Message, { foreignKey: "id_user" });
Message.belongsTo(User, { foreignKey: "id_receiver" });

sequelize.sync({ alter: true });
