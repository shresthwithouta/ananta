
import mongoose, { Schema, models, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "DRAFT",       
        "PENDING",     
        "PUBLISHED",   
        "PENDING_EDIT",
        "REJECTED",     
      ],
      default: "DRAFT",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    rejectionReason: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = models.Blog || model("Blog", BlogSchema);
export default Blog;
