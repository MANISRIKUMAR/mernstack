import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
      // ❌ unique: true  (password NEVER unique)
    },

    // role: {
    //   type: String,
    //   enum: ["user", "admin"],
    //   default: "user"
    // },

    // profilePic: {
    //   type: String,
    //   default: ""
    // },

    // phoneNo: {
    //   type: String,
    //   default: null
    // },

    // address: {
    //   type: String,
    //   default: null
    // },

    // city: {
    //   type: String,
    //   default: null
    // },

    // zipCode: {
    //   type: String,
    //   default: null
    // },

    // isVerified: {
    //   type: Boolean,
    //   default: false
    // },

    // isLoggedIn: {
    //   type: Boolean,
    //   default: false
    // },

    // otp: {
    //   type: String,
    //   default: null
    // },

    // otpExpiry: {
    //   type: Date,
    //   default: null
    // },

    // token: {
    //   type: String,
    //   default: null
    // }
  },
  { timestamps: true }
);

export const User = mongoose.model("User1", userSchema);
