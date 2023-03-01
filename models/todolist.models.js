import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  createdDate: {
    type: Date,
    require: true,
  },
  completed: {
    type: Boolean,
    require: false,
  },
});

export default mongoose.model("Todo", todoSchema);
