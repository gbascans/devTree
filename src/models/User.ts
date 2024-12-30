import mongoose, { Schema } from "mongoose";

interface Iuser {
  name: string;
  mail: string;
  password: string;
}

const userSchema = new Schema({
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
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<Iuser>("User", userSchema);
export default User;
