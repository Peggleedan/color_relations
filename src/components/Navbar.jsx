import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import Headroom from 'react-headroom';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  	const navigate = useNavigate();
  	const [isAtTop, setisAtTop] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		setScrollPosition(window.scrollY);
		if (isMenuOpen) {
			document.body.classList.remove('no-scroll');
		}
		else {
			document.body.classList.add('no-scroll');
		}
	};

  	const toHome = () => {
		navigate('/');
	}

  	useEffect(() => {
		const threshold = window.innerHeight * 0.07;
		const width = window.innerWidth;

		const checkLocale = () => {
			if (window.scrollY <= threshold) {
				setisAtTop(false);
			} else {
				setisAtTop(true);
			}
		};

		const handleResize = () => {
			if (window.innerWidth > 768) {
				document.body.classList.remove('no-scroll');
				//document.querySelector('.burger-menu').classList.remove('show'); // remove the burger menu show so it doesn't stay open
			}
		};

	checkLocale();
	handleResize();
    window.addEventListener('scroll', checkLocale, true);
	window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', checkLocale, true);
	  window.removeEventListener('resize', handleResize);
	  document.body.classList.remove('no-scroll');
    };
	
  }, [scrollPosition]);

  return (
	<>
	<Headroom>
    <header className={`${isAtTop ? 'header' : 'header-modified'}`}>
      <div className="logo-name" onClick = {toHome}>
        <img src="/Images/logo.png" alt="Logo" className="logo" />
        <div className="name">Tunisia Surf</div>
      </div>
      <nav className="nav-buttons">
        <Link to="/" className="site-nav">Home</Link>
        <Link to="/about" className="site-nav">About</Link>
        <Link to="/prices" className="site-nav">Prices</Link>
        <Link to="/contact" className="site-nav">Availability</Link>
      </nav>
      <div className="nav-buttons">
        <button id="booking-button" href="#book">Book Today!</button>
      </div>
    </header>
	</Headroom>
	<div className='header-mobile'>
      <div className="logo-name-mobile" onClick = {toHome}>
        <img src="/Images/logo.png" alt="Logo" className="logo" />
        <div className="name">Tunisia Surf</div>
      </div>
	  <div className='burger-button' onClick = {toggleMenu}>&#9776;</div>
	</div>
	<div className={`burger-menu ${isMenuOpen ? 'show' : 'hide'}`} style = {{top: `${scrollPosition+80}px`}}>
	  <nav className="mobile-buttons">
		  <Link to="/" className="mobile-nav">Home</Link>
		  <Link to="/about" className="mobile-nav">About</Link>
		  <Link to="/prices" className="mobile-nav">Prices</Link>
		  <Link to="/contact" className="mobile-nav">Availability</Link>
		  <a className="mobile-nav" href="#book">Book Today!</a>
	  </nav>
  	</div>
	</>
  );
};

export default Navbar;
