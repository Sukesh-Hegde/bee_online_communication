import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  registered: { type: Date, default: Date.now },

  country: { type: String, required: true },

  usage: {
    type: Number,
    required: true,
  },

  payment: {
    type: String,
    required: true,
  },
  activity: { type: String, required: true },
});

const UserDetail = mongoose.model("UserD", userSchema);

export default UserDetail;
