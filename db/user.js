import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: { type: String, unique: true, required: true },
  psn: String,
});

export const UserModel = model('Users', userSchema);
