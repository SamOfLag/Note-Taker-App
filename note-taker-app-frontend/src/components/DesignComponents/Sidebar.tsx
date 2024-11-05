import React from "react";
import { FaHome, FaBell, FaUser, FaCog, FaStickyNote } from 'react-icons/fa'
import '../../styles/Sidebar.css';

const SideBar: React.FC = () => {
    return (
    <aside className="sidebar">
        <div className="sidebar-icons">
            {/* <FaStickyNote className="icon active"/>
            <FaHome className="icon"/>
            <FaBell className="icon"/>
            <FaUser className="icon"/>
            <FaCog className="icon"/> */}
        </div>
        <div className="sidebar-profile">
            <img src="/Notenest.png" alt="Profile" className="profile-image" />
        </div>
    </aside>
    )
}

export default SideBar;