const User = require("../model/user-model");
// const Post = require("../model/post-model-seq");
const http = require("http-status-codes");
// const sequelize = require("../database/integradorConnection");
// const { QueryTypes } = require("sequelize");

// -----------------------------------------------------------------------------------------------------------------------//

const createUser = async (req, res) => {
  const data = ({ firstname, lastname, username } = req.body);

  const user = User.build(data);
  console.log("user: ", user);
  try {
    const result = await user.save();
    res.json({ status: http.StatusCodes.OK, data: result });
  } catch (error) {
    res.json({ status: http.StatusCodes.INTERNAL_SERVER_ERROR, data: "ERROR" });
  }
};

// -----------------------------------------------------------------------------------------------------------------------//

const getUserAll = async (req, res) => {
  // const users = await User.findAll();
  const users = await User.findAndCountAll();
  res.json({ status: true, data: users });
};

// -----------------------------------------------------------------------------------------------------------------------//

const getUserByid = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  res.json({ status: http.StatusCodes.OK, data: user });
};

// -----------------------------------------------------------------------------------------------------------------------//

const getUserByidUpdate = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const updateUser = async (req, res) => {
  const { id, firstname, lastname } = req.params;
  const user = await getUserByidUpdate(id);
  try {
    const userId = await User.update(
      {
        firstname: firstname,
        lastname: lastname,
      },
      {
        where: { iduser: id },
      }
    );
    res.json({ status: true, data: user });
  } catch (error) {
    res.json({ status: false, data: "ERROR" });
  }
};

// -----------------------------------------------------------------------------------------------------------------------//

const getUserByidDelete = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await getUserByidDelete(id);
  const users = await User.destroy({ where: { iduser: id } });
  res.json({ status: true, data: user });
};

// -----------------------------------------------------------------------------------------------------------------------//

module.exports = {
  createUser,
  getUserAll,
  getUserByid,
  updateUser,
  deleteUser,
};
