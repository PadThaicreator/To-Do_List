import mongoose  from 'mongoose';


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  lastName: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber : String,
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'User',
  id: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

userSchema.virtual('Task', {
  ref: 'Task', // ชื่อ model ที่เราสร้างไว้
  localField: '_id', // ฟิลด์ที่ใช้เชื่อม
  foreignField: 'taskId', // ฟิลด์ใน Task ที่เชื่อม
  justOne: false
});



export const User = mongoose.models.User || mongoose.model('User', userSchema)
