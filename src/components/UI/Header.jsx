import React from 'react';
import './Header.css'; // Optional external CSS for styling
import '../../index.css'; // Optional external CSS for styling
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Mark Parish</h1>
      </div>
      <nav className="navbar">
        <ul>
        
          <li>
            <NavLink to="/" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio" activeClassName="active-link">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Resume" activeClassName="active-link">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;