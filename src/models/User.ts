import mongoose, { Schema } from "mongoose";

interface Iuser {
  handle: string;
  name: string;
  mail: string;
  password: string;
}

const userSchema = new Schema({
  handle: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<Iuser>("User", userSchema);
export default User;
