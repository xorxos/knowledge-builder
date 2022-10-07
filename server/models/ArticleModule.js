import mongoose from "mongoose";

const ArticleModule = new mongoose.Schema({
  moduleType: {
    type: String,
    enum: [
      "header",
      "subheader",
      "paragraph",
      "bullets list",
      "numbered list",
      "code block",
      "image",
      "text-image split",
      "alert",
    ],
    default: "header",
  },
  position: {
    type: Number,
    req: [true, "Please provide a position for this module"],
  },
  mainText: {
    type: String,
    trim: true,
  },
  listText: {
    type: [String],
  },
  alertColor: {
    type: String,
    enum: ["blue", "red", "yellow", "green", "orange"],
  },
  imagePath: {
    type: String,
  },
  imageSplitDirection: {
    type: String,
    enum: ["left", "right"],
    default: "right",
  },
  imageCaption: {
    type: String,
  },
  articleId: {
    type: mongoose.Types.ObjectId,
    ref: "Article",
    req: [true, "Please provide an article id"],
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
  },
}, {timestamps: true});

export default mongoose.model("Article Module", ArticleModule);
