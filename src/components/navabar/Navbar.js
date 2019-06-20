import React from 'react';
import "./navbar.css";

const Navbar = props => (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
    <h1 className="navbar-text">Richie's Fighter </h1>
    <span className="navbar-text card-guess">{props.cardGuess}</span>
    <span className="navbar-text current-score">Current Score: {props.currentScore}</span>
    <span className="navbar-text high-score">High Score: {props.highScore}</span>
    </nav>

);
export default Navbar;