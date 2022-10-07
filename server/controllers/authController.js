import { StatusCodes } from "http-status-codes";

const login = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "login" });
};

const register = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "register" });
};

const updateUser = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "updateUser" });
};

export { login, register, updateUser };
