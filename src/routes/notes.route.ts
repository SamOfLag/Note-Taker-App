import express from 'express';
import {
    createNote,
    getNotes,
    getNoteById,
    updateNote,
    deleteNote,
    health
} from '../controllers/notes.controller';
// import protect from '../middlewares/authMw'

const router = express.Router();

// Health check route
router.get('/', health);

// Route for creating a note
router.post('/notes', createNote); // Create a new note

// Route for retrieving all notes
router.get('/notes', getNotes); // Get all notes

// Route for retrieving a specific note by ID
router.get('/notes/:id', getNoteById); // Get a specific note by ID

// Route for updating a note by ID
router.put('/notes/:id', updateNote); // Update a specific note by ID

// Route for deleting a note by ID
router.delete('/notes/:id', deleteNote); // Delete a specific note by ID

export default router;
