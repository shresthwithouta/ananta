import mongoose, { Schema, models, model } from "mongoose";

export type UserRole = "USER" | "VIP" | "ADMIN";
export type AccountStatus = "PENDING" | "ACTIVE" | "SUSPENDED";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },

    password: {
      type: String,
      required: false, // Optional for OAuth users
      select: false,
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows null values while maintaining uniqueness
    },

    provider: {
      type: String,
      enum: ["credentials", "google"],
      default: "credentials",
    },

    image: String, // For OAuth profile pictures

    role: {
      type: String,
      enum: ["USER", "VIP", "ADMIN"],
      default: "USER",
    },

    isPremium: {
      type: Boolean,
      default: false,
    },

    avatar: String, // Custom uploaded avatar
    coverImage: String,

    bio: {
      type: String,
      maxlength: 280,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    accountStatus: {
      type: String,
      enum: ["PENDING", "ACTIVE", "SUSPENDED"],
      default: "PENDING",
    },

    profileSettings: {
      showBookmarks: { type: Boolean, default: true },
      showBlogs: { type: Boolean, default: true },
      showComments: { type: Boolean, default: true },
    },

    bookmarks: [
      {
        kind: {
          type: String,
          enum: ["SCRIPTURE", "TEMPLE"],
        },
        item: {
          type: mongoose.Schema.Types.ObjectId,
          refPath: "bookmarks.kind",
        },
      },
    ],
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;