import mongoose from "mongoose";
import express, {Request, Response} from "express";
import Note from "./models/note.model";
import routeHandler from "./middlewares/routeHandler";
import errorHandler from "./middlewares/errorHandler";

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://The-Bridge-Builder:Ft6bFHdAVgz7lGjB@the-bridge-builder.oz9bs.mongodb.net')

// This route creates a new note
app.post('/notes', async (req: Request, res: Response) => {
    try {
        const {title, content} = req.body
        const newNote = new Note({title, content})
        const savedNote = await newNote.save()
        res.status(201).json(savedNote)
    } catch (error) {
        res.status(500).json({error: 'Unable to create a note'})
    }
})

// This route retrieves all the notes in our database
app.get('/notes', async (req: Request, res: Response) => {
    try {
        const notes = await Note.find()
        res.json(notes)
    } catch (error) {
        res.status(500).json({error: 'Could not fetch notes'})
    }
})

// This route finds a note by id
app.get('/notes/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).json({error: 'Note not found'})
        } else {
            res.json(note)
        }
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch note'})
    }
})

// This route updates a note in the database
app.put('/notes/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true})

        if (!updatedNote) {
            return res.status(404).json({error: 'Note not found'})
        }
        res.json(updatedNote)
    } catch (error) {
        res.status(500).json({error: 'Failed to update note'})
    }
})

// This routes deletes a note based on its ID
app.delete('/notes/:id', async (req:Request, res: Response): Promise<any> => {
    try {

        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        
        if (deletedNote) {
            return res.json({message: "Note deleted successfully"})
        }
            res.status(404).json({error: 'Note not found'})
    } catch (error) {
        res.status(500).json({error: 'Failed to delete note'})
    }
})


app.use(routeHandler);
app.use(errorHandler);



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    
})