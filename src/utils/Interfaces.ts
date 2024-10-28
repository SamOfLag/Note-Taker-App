import { Types, model } from 'mongoose';

export interface INote {
    title: string;
    content: string;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
}

export interface IUser {
    email: string;
    password: string;
    username: string;
    _id?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
}
