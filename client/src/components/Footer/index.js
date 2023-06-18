// Footer.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="footerStyle">
    <div className="containerStyleFooter">
      
        {location.pathname !== '/' && (
            <button
                className="buttonStyle"
                onClick={() => navigate(-1)}
            >
                &larr; Go Back
            </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - P & T</h4>
    </div>
</footer>

  );
};

export default Footer;

