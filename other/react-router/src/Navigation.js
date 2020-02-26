import React, { Component } from 'react';
import paths from './paths.json'
import { Link } from 'react-router-dom';
import "./navigation.css"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
                <li><Link to="/financial">Financial</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;