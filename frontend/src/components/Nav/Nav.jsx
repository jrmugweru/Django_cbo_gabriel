import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header Start */}
      <header className="header">
        {/* Background Image Covering the Whole Header */}
        <div className="header-background">
          {/* Navbar */}
          <div className="navbar-container">
            <div className="logo">
              <Link to="/">
                <img src="img/logo.png" alt="Logo" />
              </Link>
            </div>

            {/* Hamburger Menu */}
            <button className="hamburger-menu" onClick={toggleMenu}>
              ☰
            </button>

            {/* Navbar Items */}
            <nav className={`main-menu ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#our-story">Stories</a></li>
                <li><a href="#updates">Updates</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="/login">Login</a></li>
              </ul>

              <div className="donate-btn">
                <Link to="/donation">Make a Donation</Link>
              </div>
            </nav>
          </div>

          {/* Slider Text */}
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="slider_text">
                  <h3>USHIRIKIANO INITIATIVE</h3>
                  <p>Together Building A Healthy And Peaceful Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;