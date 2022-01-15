const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/integradorConnection");
const City = require("./city-model");

class Country extends Model {}

Country.init(
  {
    id_country: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "countries",
    sequelize,
  }
);

Country.hasMany(City, { foreignKey: "id_country" });
City.belongsTo(Country, { foreignKey: "id_country" });

module.exports = Country;
