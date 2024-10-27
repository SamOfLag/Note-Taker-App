import mongoose, {Document, Schema} from "mongoose";

interface INote extends Document {
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
}

const NoteSchema: Schema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

NoteSchema.pre('save', function (next) {
    this.updatedAt = new Date()
    next()
})

const Note = mongoose.model<INote>('Note', NoteSchema)

export default Note;