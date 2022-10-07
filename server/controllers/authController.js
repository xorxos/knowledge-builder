import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

const login = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "login" });
};

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if ((!firstName, !lastName, !email, !password))
    throw new BadRequestError("Please provide all values");

  const userExists = await User.findOne({ email });

  if (userExists) throw new BadRequestError("Email is already in use");

  const user = await User.create({ firstName, lastName, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    token,
  });
};

const updateUser = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "updateUser" });
};

export { login, register, updateUser };
