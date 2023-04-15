import React from "react";

import { NavLink } from "react-router-dom";

import "./styles.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="navbar-icon">
                    <a href="/">
                        Trackly
                    </a>
                </li>
            </ul>
            <ul className="navbar-list">
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "")} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "")} to="/issues">
                        Issues
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "")} to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
