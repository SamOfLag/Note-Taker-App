import express, { Request, Response } from 'express';
import Note from '../models/note';
import { error } from 'console';
// import User from '../models/User';

// Health Check
export const health = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to the Note-taking App' });
};

// Create Note
export const createNote = async (req: Request, res: Response) => {
    
    try {

        const { title, content } = req.body;

        const newNote = new Note({
            title,
            content,
        });

        await newNote.save();
        res.status(201).json({ error: false, message: 'Note created succesfully', data: newNote });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ error: 'Unable to create a new note' });
    }
};

// Get All Notes
export const getNotes = async (req: Request, res: Response): Promise<void> => {

    try {
        const notes = await Note.find();
        res.status(200).json({ error: false, data: notes });
    } catch (error: any) {
        res.status(500).json({ error: 'Could not get all notes'});
    }
};

// Get a Single Note by ID
export const getNoteById = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const { id } = req.params;

        const note = await Note.findById(id);
        if (!note) {
            throw new Error('Note not found')
        //  res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json({ error: false, data: note });

    } catch (error: any) {
        console.log(error);
        
        res.status(500).json({ error: 'Could not fetch note' });
    }
};

// Update Note
export const updateNote = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNote) {
             res.status(404).json({ error: true, data: 'Note not found' });
        }
        res.status(200).json({ error: false, data: updatedNote });
    } catch (error: any) {
        res.status(500).json({ error: 'Unable to update note' });
    }
};

// Delete Note
export const deleteNote = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const { id } = req.params;

        const note = await Note.findByIdAndDelete(id);

        if (!note) {
            res.status(404).json({ error: true, data: 'Note not found' });
        }
        res.status(200).json({ error: false, data: 'Note deleted successfully' });
        
    } catch (error: any) {
        res.status(500).json({ error: true, data: error.message });
    }
};
