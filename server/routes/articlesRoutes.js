import express from "express";
const router = express.Router();

import {
  createArticle,
  getAllArticles,
  updateArticle,
  deleteArticle,
  showStats,
} from "../controllers/articlesController.js";

router.route("/").post(createArticle).get(getAllArticles);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteArticle).patch(updateArticle);

export default router;
