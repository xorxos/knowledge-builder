import { StatusCodes } from "http-status-codes";

const createArticle = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "createArticle" });
};

const getAllArticles = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "getAllArticles" });
};

const updateArticle = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "updateArticle" });
};

const deleteArticle = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "deleteArticle" });
};

export { createArticle, getAllArticles, updateArticle, deleteArticle };
