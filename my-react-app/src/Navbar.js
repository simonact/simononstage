
import React from 'react';
import './Navbar.css';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#"><img src="assets/LW1.png" alt="SR Agency Logo" className="logo"/><span>SR Agency</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#enquiry">Enquiry</a></li>
                    <li className="nav-item"><a className="nav-link" href="#ask-for-rate">Rate Us</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
