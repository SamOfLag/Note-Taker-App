import mongoose, { Schema, model } from 'mongoose';
import { INote } from '../utils/Interfaces';

const noteSchema = new Schema<INote>({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Note = mongoose.model<INote>('Note', noteSchema)

export default Note;