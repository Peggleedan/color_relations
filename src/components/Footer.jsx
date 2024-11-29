import React from 'react';
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const toHome = () => {
		navigate('/');
	}
    const toAbout = () => {
		navigate('/about');
	}
    const toPrices = () => {
		navigate('/prices');
	}
    const toContact = () => {
		navigate('/contact');
	}

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section company-info">
                    <h3>GET IN TOUCH</h3>
                    <p>info@company.com</p>
                    <p>(123) 456-7890</p>
                </div>
                <div className="footer-section footer-logo" >
                    <img src="/Images/logo.png" alt="Logo" onClick = {toHome}/>
                    <p>&copy; 2024<span></span></p>
                </div>
                <div className="footer-section social-media">
                    <h3>MADE BY</h3>
                    <a href="https://facebook.com"><i className='fab fa-facebook-f'  target="_blank"></i></a>
                    <a href="https://twitter.com"><i className='fab fa-twitter' href="https://twitter.com" target="_blank"></i></a>
                    <a href="https://instagram.com"><i className='fab fa-instagram'  target="_blank"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;