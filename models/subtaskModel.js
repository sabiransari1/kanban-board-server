const mongoose = require('mongoose');

const subtaskSchema = new mongoose.Schema(
  {
    // _id: ObjectId,
    title: { type: String },
    isCompleted: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

const subtaskModel = mongoose.model('subtasks', subtaskSchema);

module.exports = subtaskModel;
