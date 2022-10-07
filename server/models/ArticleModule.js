import mongoose from "mongoose";

const ArticleModuleSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

export default mongoose.model("Article Module", ArticleModuleSchema);
