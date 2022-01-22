require("dotenv").config();
const sequelize = require("../database/integradorConnection");
const User = require("./user-model");
const Message = require("./message-model");
const Country = require("./country-model");
const City = require("./city-model");

User.hasMany(Message, { foreignKey: "id_user" });
Message.belongsTo(User, { foreignKey: "id_user" });

User.hasMany(Message, { foreignKey: "id_user" });
Message.belongsTo(User, { foreignKey: "id_receiver" });

Country.hasMany(City, { foreignKey: "id_country" });
City.belongsTo(Country, { foreignKey: "id_country" });

City.hasMany(User, { foreignKey: "id_city" });
User.belongsTo(City, { foreignKey: "id_city" });

sequelize.sync({ alter: true });
