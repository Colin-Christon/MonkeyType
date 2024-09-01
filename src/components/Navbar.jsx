import React, { useState } from 'react';
import "../style/Navbar.css"
import keyboard from "../assets/keyboard.png"
import about from "../assets/info.png"
import setting from "../assets/setting.png"
import leader from "../assets/crown.png"

const Navbar = () => {
    const[hoveredItem, setHoveredItem ] = useState(null);
    const handleMouseEnter = (altText) => {
      setHoveredItem(altText);
    };
  
    const handleMouseLeave = () => {
      setHoveredItem(null);
    };

    return (
      <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Monkeytype</div>
        <div className="nav-item">
          <img src={keyboard} alt="Start Test"
          onMouseEnter={() => handleMouseEnter('Start')}
          onMouseLeave={handleMouseLeave} />
          {hoveredItem === 'Start' && (
            <span className="hover-text">Start</span>
          )}
        </div>

        <div className="nav-item">
          <img src={leader}  alt="Leaderboard" 
          onMouseEnter={() => handleMouseEnter('Leaderboard')}
          onMouseLeave={handleMouseLeave} />
          {hoveredItem === 'Leaderboard' && (
            <span className="hover-text">Leaderboard</span>
          )}
        </div>

        <div className="nav-item">
          <img src={about} alt="About"
          onMouseEnter={() => handleMouseEnter('About')}
          onMouseLeave={handleMouseLeave} />
          {hoveredItem === 'About' && (
            <span className="hover-text">About</span>
          )}
        </div>

        <div className="nav-item">
          <img src={setting} alt="Settings"
          onMouseEnter={() => handleMouseEnter('Setting')}
          onMouseLeave={handleMouseLeave} />
          {hoveredItem === 'Setting' && (
            <span className="hover-text">Setting</span>
          )}
        </div>

      </div>
      <div className="navbar-right">
        <div className="nav-item">Contact</div>
        <div className="nav-item">Profile</div>
      </div>
    </nav>
    );
}
export default Navbar;
