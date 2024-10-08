// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styles

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="logo.png" alt="MSU-IIT NMPC Logo" className="header-logo"/>
        <div className="header-title-container">
          <div className="header-title">MSU-IIT National Multi-Purpose Cooperative</div>
          <div className="header-subtitle"></div>
        </div>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-button">🔍</button>
      </div>
    </div>
  );
};

export default Header;
