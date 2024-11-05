import React, { useState, useEffect } from 'react';
import { IEditNote } from '../utils/interfaces';
import { updateNote } from '../api/notesAPIs';
import { useNavigate } from 'react-router-dom';
import '../styles/Editnote.css';

const EditNoteForm: React.FC<IEditNote> = ({ initialTitle, initialContent, _id, onSave }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        setTitle(initialTitle);
        setContent(initialContent);
    }, [initialTitle, initialContent]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !content) {
            alert('Both title and content are required');
            return;
        }

        try {
            const updatedNote = await updateNote(_id, { title, content });
            onSave(updatedNote);
            navigate(`/notes/${_id}`);
        } catch (error) {
            setError('Failed to update note');
        }
    };

    return (
        <div className="edit-note-form-container">
            <h2>Edit Note</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Edit title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter new title"
                    />
                </div>

                <div>
                    <label>Edit content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter note content"
                    />
                </div>

                <button type='submit'>Save changes</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default EditNoteForm;
