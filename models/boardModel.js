const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    // _id: ObjectId,
    name: { type: String },
    tasks: [{ type: ObjectId, ref: 'tasks' }],
  },
  {
    versionKey: false,
  }
);

const boardModel = mongoose.model('kanbanboards', boardSchema);

module.exports = boardModel;
