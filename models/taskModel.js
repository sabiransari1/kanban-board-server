const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    // _id: ObjectId,
    title: { type: String },
    description: { type: String },
    subtask: [{ type: String, ref: 'subtasks' }],
    status: { type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo' },
  },
  {
    versionKey: false,
  }
);

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = taskModel;
