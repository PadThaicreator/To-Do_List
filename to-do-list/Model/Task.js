import mongoose  from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category : String,
  dateTask : Date,
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Task', taskSchema);