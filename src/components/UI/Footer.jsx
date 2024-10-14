import React from 'react';
import './Footer.css'; // You can add styles in a separate CSS file or use inline styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        <ul className="social-links">
          <li>
            <a
              href="https://instagram.com/mparish09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mark-parish-81a430327/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mcparish"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:parish09@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;