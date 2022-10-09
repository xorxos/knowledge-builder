import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import Article from "../models/Article.js";
import checkPermissions from "../utils/checkPermissions.js";

const createArticle = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  const article = await Article.create(req.body);

  res.status(StatusCodes.CREATED).json({ article });
};

const getAllArticles = async (req, res) => {
  const articles = await Article.find({ createdyBy: req.user.userId });
  res.status(StatusCodes.OK).json({ articles });
};

const updateArticle = async (req, res) => {
  const { id: articleId } = req.params;
  const { title } = req.body;

  // throw error if required field is missing
  if (!title) {
    throw new BadRequestError("Please provide all values");
  }

  // check if article is found
  const article = await Article.findOne({ _id: articleId });
  if (!article) {
    throw new NotFoundError(`No article with id: ${articleId}`);
  }

  //check permissions
  checkPermissions(req.user, article.createdBy);

  // update and send status
  const updatedArticle = await Article.findOneAndUpdate(
    { _id: articleId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updatedArticle });
};

const deleteArticle = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "deleteArticle" });
};

export { createArticle, getAllArticles, updateArticle, deleteArticle };
