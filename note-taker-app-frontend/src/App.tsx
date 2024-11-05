import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateNotePage from './pages/CreateNotePage';
import EditNotePage from './pages/EditNotePage';
import DetailsPage from './pages/NoteDetailsPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreateNotePage />} />
                    <Route path="/edit/:id" element={<EditNotePage />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
















// import React, { useState } from 'react';
// import NoteList from './components/NoteList';
// import CreateNoteForm from './components/CreateNoteForm';
// import EditNoteForm from './components/EditNoteForm';

// interface Note {
//   id: string;
//   title: string;
//   content: string;
// }

// const App: React.FC = () => {
//   const [notes, setNotes] = useState<Note[]>([
//     { id: '1', title: 'Note 1', content: 'This is the content of note 1.' },
//   ]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentNote, setCurrentNote] = useState<Note | null>(null);

//   const addNote = (title: string, content: string) => {
//     const newNote = { id: Date.now().toString(), title, content };
//     setNotes([...notes, newNote]);
//   };

//   const editNote = (id: string, title: string, content: string) => {
//     setNotes(notes.map((note) => (note.id === id ? { ...note, title, content } : note)));
//     setIsEditing(false);
//     setCurrentNote(null);
//   };

//   const selectNoteForEditing = (id: string) => {
//     const note = notes.find((n) => n.id === id);
//     if (note) {
//       setCurrentNote(note);
//       setIsEditing(true);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>My Notes App</h1>
//       {!isEditing ? (
//         <>
//           <CreateNoteForm onCreateNote={addNote} />
//           <NoteList notes={notes} onSelectNote={selectNoteForEditing} />
//         </>
//       ) : (
//         currentNote && (
//           <EditNoteForm
//             initialTitle={currentNote.title}
//             initialContent={currentNote.content}
//             onSave={(title, content) => editNote(currentNote.id, title, content)}
//           />
//         )
//       )}
//     </div>
//   );
// };

// export default App;
