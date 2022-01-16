const User = require("../model/user-model");
const http = require("http-status-codes");
// const sequelize = require("../database/integradorConnection");
// const { QueryTypes } = require("sequelize");

// -----------------------------------------------------------------------------------------------------------------------//

const getUserAll = async (req, res) => {
  // const users = await User.findAll();
  const users = await User.findAndCountAll();
  res.json({ status: true, data: users });
};

// -----------------------------------------------------------------------------------------------------------------------//

module.exports = {
  getUserAll,
};
