

import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer id="blog" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="img/logo.png" alt="Ushirikiano Initiative" />
            <div className="footer-social">
              <a href="https://www.facebook.com/UshirikianoInitiative" className="social-link">
                <img src="img/fubu (2).png" alt="Facebook" />
              </a>
              <a href="https://www.youtube.com/@ushirikianointiative4851" className="social-link">
                <img src="img/youtub.png" alt="YouTube" />
              </a>
              <a href="#" className="social-link">
                <img src="img/link.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="footer-text">
            <h2>USHIRIKIANO INITIATIVE</h2>
            <p>Together Building a Healthy and Peaceful Community</p>
            <p>Tel: 0725546899 | Email: <a href="mailto:ushirikianoinitiativebo@gmail.com">ushirikianoinitiativebo@gmail.com</a></p>
            <p>P.O. Box 832-80400 Ukunda</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Ushirikiano Initiative. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
