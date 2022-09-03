import mongoose, { Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';
const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre('save', async function () {
  this.password = await bcryptjs.hash(this.password, 8);
});

UserSchema.methods.display = function () {
  return {
    _id: this._id,
    name: this.name,
    email: this.email,
  };
};

export default mongoose.model('User', UserSchema);
