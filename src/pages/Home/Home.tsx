import React from "react";

import { Link } from "react-router-dom";

import Button from "components/Button";

import "./styles.scss";

const Home = () => {
    return (
        <div className="splash">
            <div className="splash-message">
                <p className="splash-message-title">
                    Take control of your tasks with <span>Trackly</span>
                </p>
                <p className="splash-message-text">
                    Manage your projects with Trackly, the ultimate issue tracking solution. Whether you're working on a complex project or
                    just need to keep track of small tasks, Trackly has got you covered.
                </p>
                <div className="splash-message-buttons">
                    <Link to="/about">
                        <Button text="About us" />
                    </Link>
                    <Link to="/issues">
                        <Button text="View issues" className="white-outline" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
