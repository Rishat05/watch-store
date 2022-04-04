import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav-link'>
            <div className="link-container">
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/reviews'>Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/About'>About</NavLink>
            </div>

        </nav>
    );
};

export default Header;