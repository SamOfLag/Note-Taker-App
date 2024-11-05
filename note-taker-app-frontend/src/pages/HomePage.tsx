import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteList from '../components/NoteList';
import CreateNote from '../components/CreateNote';
import SideBar from '../components/DesignComponents/Sidebar';
import { INote } from '../utils/interfaces';
import { createNote, fetchAllNotes } from '../api/notesAPIs';
import '../styles/Homepage.css';

const HomePage: React.FC = () => {
    const [notes, setNotes] = useState<INote[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getNotes = async () => {
            try {
                const notesData = await fetchAllNotes();
                setNotes(notesData);
            } catch (error) {
                setError('Failed to fetch notes');
            }
        };

        getNotes();
    }, []);

    const handleCreateNote = async (note: INote) => {
        try {
            const newNote = await createNote(note);  // Assuming `createNote` sends the note to the backend and returns the created note
            setNotes((prevNotes) => [newNote, ...prevNotes]);  // Insert the new note at the beginning of the array
        } catch (error) {
            setError('Failed to create note');
        }
    };

    const handleSelectNote = (id: string) => {
        navigate(`/details/${id}`);
    };

    const handleNewNote = () => {
        navigate('/create'); // Adjust this route as needed
    };

    if (error) return <p>{error}</p>;

    return (
        <div className="homepage-container">
            <aside className="sidebar">
                <SideBar />
            </aside>
            <main className="content">
                <header className="header">
                    <h1>All Notes</h1>
                    <div className="actions">
                        <input type="text" placeholder="Search notes" className="search-input" />
                        <button className="sort-button">Sort by: Chronological</button>
                    </div>
                </header>
                <NoteList notes={notes} onSelectNote={handleSelectNote} />
            </main>
            <button className="new-note-button" onClick={handleNewNote}>+ New Note</button>
        </div>
    );
};

export default HomePage;
