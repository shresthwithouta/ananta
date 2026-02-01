import mongoose, { Schema, models, model } from "mongoose";

const ScriptureSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["VEDA", "UPANISHAD", "EPIC", "PURANA", "OTHER"],
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    pdfUrl: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
    },

    isPremium: {
      type: Boolean,
      default: false,
    },

    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Scripture = models.Scripture || model("Scripture", ScriptureSchema);
export default Scripture;
