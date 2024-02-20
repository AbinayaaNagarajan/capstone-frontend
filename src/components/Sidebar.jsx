// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/" exact >Home</NavLink></li>
        <li><NavLink to="/students" className="nav-link">Enroll Student</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
        <li><NavLink to="/attendance" className="nav-link">Attendance</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
