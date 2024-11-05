import React from 'react';
import { INoteCard } from '../utils/interfaces';
import { FaThumbtack, FaShareAlt, FaEllipsisH, FaPen } from 'react-icons/fa';
import '../styles/Notecard.css';

// Helper function to generate random colors
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const NoteCard: React.FC<INoteCard> = ({ title, content, onClick, createdAt }) => {
    const backgroundColor = getRandomColor(); // Generate a random color for this note card

    return (
        <div onClick={onClick} className="note-card" style={{ backgroundColor }}>
            <div className="note-header">
                <h3>{title}</h3>
                <div className="note-icons">
                    {/* <FaThumbtack />
                    <FaShareAlt />
                    <FaEllipsisH /> */}
                </div>
            </div>
            <p>{content.substring(0, 100)}...</p>
            <div className="note-footer">
                {/* Display the actual creation date of the note */}
                <span>{createdAt ? new Date(createdAt).toLocaleDateString() : 'N/A'}</span>
                {/* <FaPen className="edit-icon" /> */}
            </div>
        </div>
    );
};

export default NoteCard;
