import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    role: { type: Number },
    firstName: { type: String },
    lastName: { type: String },
    birthday: { type: Date },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
