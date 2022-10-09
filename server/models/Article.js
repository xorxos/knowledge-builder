import mongoose, { Schema } from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      maxlength: 200,
    },
    modules: [
      {
        moduleType: {
          type: String,
          enum: [
            "header",
            "subheader",
            "paragraph",
            "bullet list",
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
          default: "red",
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
      },
    ],
    status: {
      type: String,
      enum: ["pending, published, flagged"],
      default: "pending",
    },
    category: {
      type: String,
      maxlength: 50,
    },
    tags: [String],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Article", ArticleSchema);
