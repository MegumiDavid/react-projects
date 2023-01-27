import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
    text: { type: String },
    checked: { type: Boolean },
    user: { type: mongoose.SchemaTypes.ObjectId }
});

export default model('Todo', TodoSchema);