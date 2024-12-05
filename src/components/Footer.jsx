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
                    <h3>MADE BY</h3>
                        <span>Diagnosa Fenomena</span><br/>
                        <span>Hyosun "Lucky" Kim</span><br/>
                        <span>Matilda Jansson</span><br/>
                        <span>Ediz Özdamar</span>
                </div>
                <div className="footer-section footer-logo" >
                    <img src="/Images/logo.png" alt="Logo" onClick = {toHome}/>
                </div>
                <div className="footer-section social-media">
                </div>
            </div>
        </footer>
    );
}

export default Footer;