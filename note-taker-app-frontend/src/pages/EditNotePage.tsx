import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditNote from '../components/EditNote';
import { fetchNoteById, updateNote } from '../api/notesAPIs';
import { INote } from '../utils/interfaces';

const EditNotePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [note, setNote] = useState<INote | null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchNote = async () => {
            if (id) {
                const fetchedNote = await fetchNoteById(id);
                setNote(fetchedNote);
            }
        };

        fetchNote();
    }, [id]);

    const handleSave = async (note: INote) => {
        try {
            if (id) {
                await updateNote(id, note)
                navigate(`/details/${id}`)
            }
        } catch (error) {
            console.error('Failed to update note:', error)
        }
        // Implement the logic to update the note
    };

    if (!note) return <p>Loading...</p>;

    return (
        <div>
            <h1>Edit Note</h1>
            <EditNote
                _id={note._id}
                initialTitle={note.title}
                initialContent={note.content}
                onSave={handleSave}/>
        </div>
    );
};

export default EditNotePage;
