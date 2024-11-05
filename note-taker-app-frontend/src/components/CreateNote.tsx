import React, { useState } from 'react';
import { ICreateNote } from '../utils/interfaces';
import { createNote } from '../api/notesAPIs';
import { useNavigate } from 'react-router-dom';
import '../styles/Createnote.css'; // Ensure to create this CSS file

const CreateNote: React.FC<ICreateNote> = ({ onCreateNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !content) {
            alert('Both title and content are required');
            return;
        }

        try {
            const newNote = await createNote({ title, content });
            onCreateNote(newNote); // Passes the created note back up to parent component if needed
            setTitle('');
            setContent('');
            console.log(newNote);
            navigate(`/`); // Redirects to the note details page after creation
        } catch (error) {
            setError('Failed to create note');
        }
    };

    return (
        <div className="create-note-container">
            <h2>Create a New Note</h2>
            <form onSubmit={handleSubmit} className="create-note-form">
                <div className="input-group">
                    <label htmlFor="note-title">Enter Title</label>
                    <input 
                        id="note-title"
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="note-input"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="note-content">Start Typing Content...</label>
                    <textarea 
                        id="note-content"
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        className="note-input"
                    />
                </div>

                <button type="submit" className="submit-button">Save</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default CreateNote;
