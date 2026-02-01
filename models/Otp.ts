import mongoose, { Schema, models, model } from "mongoose";

const OtpSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    otpHash: {
      type: String,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 }, // Mongo will auto-delete after expiry
    },
  },
  { timestamps: true }
);

const Otp = models.Otp || model("Otp", OtpSchema);
export default Otp;
