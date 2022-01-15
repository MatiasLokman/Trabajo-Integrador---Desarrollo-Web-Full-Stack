const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/integradorConnection");

class City extends Model {}

City.init(
  {
    id_city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_country: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "cities",
    sequelize,
  }
);

module.exports = City;
