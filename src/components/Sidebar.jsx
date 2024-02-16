// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/" className="active">Home</NavLink></li>
        <li><NavLink to="/students" className="active">Students</NavLink></li>
        <li><NavLink to="/contact" className="active">Contact Us</NavLink></li>
        <li><NavLink to="/signup" className="active">Signup</NavLink></li>
        <li><NavLink to="/attendance" className="active">Attendance</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
