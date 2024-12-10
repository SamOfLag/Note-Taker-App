import mongoose, { Schema, model } from 'mongoose';
import { IUser } from '../utils/Interfaces';

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: false,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


const User = mongoose.model<IUser>('User', userSchema)
export default User;