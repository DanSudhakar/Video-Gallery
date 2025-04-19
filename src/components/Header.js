import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Video Hub.png';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="header-left">
        <img src={logo} alt="Video Hub Logo" className="App-logo" />
        <h1>digital gallery</h1>
      </div>
      <nav className="header-right">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/videos">Videos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;