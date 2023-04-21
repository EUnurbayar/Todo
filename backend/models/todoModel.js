import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';


const schema = Schema({
    user_id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    completed: Boolean 
}, {
    timestamps: true
});

export default model('todo', schema);