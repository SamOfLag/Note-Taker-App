import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchNoteById, deleteNote } from '../api/notesAPIs';
import { INote } from '../utils/interfaces';
import { FaEdit, FaTrash, FaArrowLeft, FaShareAlt } from 'react-icons/fa';
import '../styles/Notedetails.css';

const NoteDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [note, setNote] = useState<INote | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNote = async () => {
            if (id) {
                try {
                    const fetchedNote = await fetchNoteById(id);
                    setNote(fetchedNote);
                } catch (error) {
                    setError('Failed to fetch note');
                }
            }
        };
        fetchNote();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            try {
                await deleteNote(id!);
                navigate('/');
            } catch (error) {
                setError('Failed to delete note');
            }
        }
    };

    if (error) return <p>{error}</p>;
    if (!note) return <p>Loading...</p>;

    return (
        <div className="note-details-page">
            <header className="details-header">
                <button onClick={() => navigate('/')} className="back-button">
                    <FaArrowLeft /> Back to Notes
                </button>
                <h2 className="note-title">{note.title}</h2>
            </header>
            <main className="details-content">
                <p className="note-content">{note.content}</p>
                <br />
                Created on: {note.createdAt ? new Date(note.createdAt).toLocaleDateString() : "Date not available"}
                </main>
            <footer className="details-actions">
                <button onClick={() => navigate(`/edit/${note._id}`)} className="action-button">
                    <FaEdit /> Edit
                </button>
                <button onClick={handleDelete} className="action-button delete">
                    <FaTrash /> Delete
                </button>
                
            </footer>
        </div>
    );
};

export default NoteDetails;
