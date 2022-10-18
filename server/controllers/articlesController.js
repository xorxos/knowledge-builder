import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import Article from "../models/Article.js";
import checkPermissions from "../utils/checkPermissions.js";

const createArticle = async (req, res) => {
  const { title, tags } = req.body;

  if (!title) {
    throw new BadRequestError("Please provide all values");
  }

  // force lowercase on tags
  // so we don't need to use regex when searching later
  if (tags && tags.length > 0) {
    const newTags = tags.map((item) => item.toLowerCase());
    req.body.tags = newTags;
  }

  req.body.createdBy = req.user.userId;
  const article = await Article.create(req.body);

  res.status(StatusCodes.CREATED).json({ article });
};

const getAllArticles = async (req, res) => {
  const { status, searchType, sort, search, flagged } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (status && status !== "all") {
    queryObject.status = status;
  }

  if (flagged && flagged !== "all") {
    queryObject.flagged = flagged;
  }

  let articles;
  let count;

  if (search && searchType && searchType === "title") {
    queryObject.title = { $regex: search, $options: "i" };
    articles = await Article.find(queryObject);
    count = await Article.countDocuments(queryObject);
  } else if (searchType && search && searchType === "tag") {
    let searchTags = search.split(",");
    searchTags = searchTags.map((item) => {
      return { tags: { $regex: item.trim().toLowerCase(), $options: "i" } };
    });

    articles = await Article.find({
      $and: [...searchTags],
      ...queryObject,
    });

    count = articles.length;
  } else {
    articles = await Article.find(queryObject);
    count = articles.length;
  }

  const totalArticles = await Article.countDocuments();
  let stats = await showStats(queryObject.createdBy);
  stats.flagged = await Article.countDocuments({ flagged: true });

  res.status(StatusCodes.OK).json({ articles, count, totalArticles, stats });
};

const updateArticle = async (req, res) => {
  const { id: articleId } = req.params;

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

const deleteArticle = async (req, res) => {
  // check if found
  const { id: articleId } = req.params;
  const article = await Article.findOne({ _id: articleId });

  if (!article) {
    throw new NotFoundError(`No article found with id: ${articleId}`);
  }

  // check permissions
  checkPermissions(req.user, article.createdBy);

  // delete and send status
  await article.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Article removed" });
};

const showStats = async (createdBy) => {
  let stats = await Article.aggregate([
    {
      $match: {
        createdBy: mongoose.Types.ObjectId(createdBy),
      },
    },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    unpublished: stats.unpublished || 0,
    published: stats.published || 0,
    flagged: stats.flagged || 0,
  };

  return defaultStats;
};

export {
  createArticle,
  getAllArticles,
  updateArticle,
  deleteArticle,
  showStats,
};
