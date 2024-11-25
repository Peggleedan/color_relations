import { useState } from 'react'
import './css/About.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function About() {

  return (
    <>
    <div className='videoContainer'>
        <Navbar></Navbar>
        <h1 className = "pageHeader" id="aboutHeader"></h1>
        <img src = '/Images/about.jpeg' alt = 'about' className='videoBackground'/>
    </div>
    <div className="aboutContent">
        <div className="aboutItem">
            <img src="/Images/surf1.jpg" alt="Surfing" className="aboutImage"/>
            <div className = "aboutText">
                <h2>Surfing</h2>
                <p>Surfing is a surface water sport in which an individual, a surfer, uses a board</p>
            </div>        </div>
        <div className="aboutItem">
            <div className = "aboutText">
                <h2>Surfing</h2>
                <p>Surfing is a surface water sport in which an individual, a surfer, uses a board</p>
            </div>
            <img src="/Images/surf2.jpg" alt="Surfing" className="aboutImage"/>
        </div>
        <div className="aboutItem">
            <img src="/Images/surf3.jpg" alt="Surfing" className="aboutImage"/>
            <div className = "aboutText">
                <h2>Surfing</h2>
                <p>Surfing is a surface water sport in which an individual, a surfer, uses a board</p>
            </div>        </div>
        <div className="aboutItem">
            <div className = "aboutText">
                <h2>Surfing</h2>
                <p>Surfing is a surface water sport in which an individual, a surfer, uses a board</p>
            </div>
            <img src="/Images/surf4.jpg" alt="Surfing" className="aboutImage"/>
        </div>
    </div>
	<Footer></Footer>
    </>
  )
}

export default About
