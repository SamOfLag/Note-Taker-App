import React from 'react';
import CreateNoteForm from '../components/CreateNote';
import { INote } from '../utils/interfaces';

const CreateNotePage: React.FC = () => {
    const handleCreateNote = async (note: INote) => {
      const {title, content} = note
        // Implement the logic to create a new note
    };

    return (
        <div>
            <h1>Create Note</h1>
            <CreateNoteForm onCreateNote={handleCreateNote} />
        </div>
    );
};

export default CreateNotePage;
