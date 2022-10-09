import { StatusCodes } from "http-status-codes";
import {BadRequestError} from '../errors/index.js'
import Article from "../models/Article.js";

const createArticle = async (req, res) => {
  const {title} = req.body

  if (!title) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId
  const article = await Article.create(req.body)

  res.status(StatusCodes.CREATED).json({ article });
};

const getAllArticles = async (req, res) => {

  const articles = await Article.find({createdyBy: req.user.userId})
  res.status(StatusCodes.OK).json({articles});
};

const updateArticle = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "updateArticle" });
};

const deleteArticle = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "deleteArticle" });
};

export { createArticle, getAllArticles, updateArticle, deleteArticle };
