// Sidebar.js
import React from 'react';
import { FaTachometerAlt, FaClipboardList, FaUserFriends, FaMoneyCheckAlt, FaUser } from 'react-icons/fa'; // Import icons
import './Sidebar.css'; // Import the CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="path/to/profile-image.jpg" alt="Profile" className="profile-image" />
        <h3>Nicholas Patrick</h3>
        <p>Loan Clerk</p>
      </div>
      <ul className="nav-list">
        <li className="nav-item active"><FaTachometerAlt /> Dashboard</li>
        <li className="nav-item"><FaClipboardList /> Loan Applications</li>
        <li className="nav-item"><FaUserFriends /> Borrower List</li>
        <li className="nav-item"><FaMoneyCheckAlt /> Payment</li>
        <li className="nav-item"><FaUser /> Profile</li>
      </ul>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default Sidebar;
