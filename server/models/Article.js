import mongoose, { Schema } from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    maxlength: 200,
  },
  modules: [{ type: Schema.Types.ObjectId, ref: "Article Module" }],
  status: {
    type: String,
    enum: ["pending, published, flagged"],
    default: "pending",
  },
  categories: [String],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
  },
}, {timestamps: true});

export default mongoose.model("Article", ArticleSchema);
