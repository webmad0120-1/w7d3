import React, { Component } from 'react';
import paths from './paths.json'
import { Link } from 'react-router-dom';
import "./navigation.css"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to={paths.movies.path}>{paths.movies.sectionName}</Link></li>
                <li><Link to={paths.about.path}>{paths.about.sectionName}</Link></li>
                <li><Link to={paths.calculator.path}>{paths.calculator.sectionName}</Link></li>
                {/* <li><Link to={paths.aboutnoyear.path}>{paths.aboutnoyear.sectionName}</Link></li> */}
            </ul>
        </nav>
    )
}

export default Navigation;