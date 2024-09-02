import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/logo.png'; // Left logo
import navProfile from '../../assets/my portfolio.jpg'; // Right logo

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="Logo" className="nav-logo left-logo" />
        <h1 className="nav-title">Urban Nest</h1>
        <img src={navProfile} className='nav-profile right-logo' alt="Profile" />
    </div>
  )
}

export default Navbar;
