import React from "react";
import { FaSortAmountDown, FaTh, FaList } from "react-icons/fa";
import '../../styles/Topsection.css'

const Topsection: React.FC = () => {
    return (
        
        <>
        <h1>All Notes</h1>
        <div className="top-section">
            <div className="search-sort-container">
                <input type="text" placeholder="Search notes" className="search-input"/>
                <button className="sort-button">
                <FaSortAmountDown /> Sort by: <span>Chronological</span>
                </button>
                <div className="view-toggle">
                    <FaTh className="view-icon active" />
                    <FaList className="view-icon"/>
                </div>
            </div>
        </div>
        </>

    )
}

export default Topsection;