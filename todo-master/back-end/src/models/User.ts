import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String },
});

export default model('User', UserSchema);