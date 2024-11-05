import React from 'react';
import NoteCard from './NoteCard';
import { INote, INoteList } from '../utils/interfaces';



const NoteList: React.FC<INoteList> = ({ notes, onSelectNote }) => {
    return (
        <div className="note-list">
            {notes.map(note => (
                <NoteCard
                    key={note._id}
                    title={note.title}
                    content={note.content}
                    createdAt={note.createdAt} // Pass createdAt here
                    onClick={() => onSelectNote(note._id)}
                />
            ))}
        </div>
    );
};

export default NoteList;
