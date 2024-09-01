import React from 'react';
import '../style/Footer.css';
import { FaInstagram, FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* Social Media Icons */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="social-icon" />
        </a>
        <Link to="/twitter">
        <FaTwitter className="social-icon" />
        </Link>
          
      </div>
      <div className="footer-right">
        {/* Theme and Version Info */}
        <span className="theme-name">Light Theme</span>
        <span className="version-number">v1.0.0</span>
      </div>
    </footer>
  );
};

export default Footer;
