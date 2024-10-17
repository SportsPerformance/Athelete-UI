import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">ATHLETE</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/event">Events</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <div className="nav-button-container">
        <button className="signin-button">Sign In</button>
        <button className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
