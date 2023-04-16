import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";

import "./styles.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="navbar">
            <div className="navbar-icon">
                <NavLink to="/">Trackly</NavLink>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? <HiOutlineX size={20} color="white" /> : <HiOutlineMenu size={20} color="white" />}
            </div>
            <ul className={`navbar-list ${isOpen ? "show-menu" : ""}`}>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "")} to="/" onClick={toggleMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "")} to="/issues" onClick={toggleMenu}>
                        Issues
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "")} to="/about" onClick={toggleMenu}>
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
