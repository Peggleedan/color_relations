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

	checkLocale();
    window.addEventListener('scroll', checkLocale, true);

    return () => {
      window.removeEventListener('scroll', checkLocale, true);
	  document.body.classList.remove('no-scroll');
    };
	
  }, [scrollPosition]);

  return (
	<>
	<Headroom>
    <header className={`${isAtTop ? 'header' : 'header-modified'}`}>
    {/* <div className="logo-name" onClick = {toHome}>
        <img src="/Images/logo.png" alt="Logo" className="logo" />
        <div className="name"> Color Relations</div>
      </div> */}
      <nav className="nav-buttons">
        <Link to="/" className="site-nav">Home</Link>
        <Link to="/about" className="site-nav">Quiz</Link>
        <Link to="/prices" className="site-nav">Information</Link>
      </nav>
    </header>
	</Headroom>
	</>
  );
};

export default Navbar;
