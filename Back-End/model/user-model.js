const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/integradorConnection");
const Message = require("./message-model");
const City = require("./city-model");
const bcrypt = require("bcrypt");

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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_city: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt();
  return bcrypt
    .hash(user.password, salt)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => console.log(err));
});

User.prototype.comparePassword = async (passaword, user) => {
  return await bcrypt.compare(passaword, user.password);
};

User.hasMany(Message, { foreignKey: "id_user" });
Message.belongsTo(User, { foreignKey: "id_user" });

User.hasMany(Message, { foreignKey: "id_user" });
Message.belongsTo(User, { foreignKey: "id_receiver" });

City.hasMany(User, { foreignKey: "id_city" });
User.belongsTo(City, { foreignKey: "id_city" });

module.exports = User;
