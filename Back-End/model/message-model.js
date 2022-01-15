const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/integradorConnection");

class Message extends Model {}

Message.init(
  {
    id_message: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "messages",
    sequelize,
  }
);

module.exports = Message;
