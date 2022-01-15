const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/integradorConnection");
const Message = require("./message-model");
const Country = require("./country-model");

class User extends Model {}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    id_country: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

User.hasMany(Message, { foreignKey: "id_user" });
Message.belongsTo(User, { foreignKey: "id_user" });

Country.hasMany(User, { foreignKey: "id_country" });
User.belongsTo(Country, { foreignKey: "id_country" });

module.exports = User;
