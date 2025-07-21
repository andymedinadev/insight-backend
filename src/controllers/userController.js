const User = require("../models/User");
const { sendResponse, sendError } = require("../utils/response");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    sendResponse({
      res,
      data: user,
      status: 201,
      message: "Usuario creado correctamente",
    });
  } catch (err) {
    sendError({ res, err, status: 400 });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    sendResponse({ res, data: users });
  } catch (err) {
    sendError({ res, err });
  }
};

module.exports = {
  createUser,
  getUsers,
};
